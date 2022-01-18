package com.example.bsbackend.domains.issue.service

import com.example.bsbackend.domains.assortment.model.Assortment
import com.example.bsbackend.domains.assortment.repository.AssortmentRepository
import com.example.bsbackend.domains.book.model.dto.FilterDTO
import com.example.bsbackend.domains.book.model.dto.getGenres
import com.example.bsbackend.domains.book.model.dto.getSorted
import com.example.bsbackend.domains.book.model.dto.getType
import com.example.bsbackend.domains.book.model.entity.Book
import com.example.bsbackend.domains.book.repository.BookRepository
import com.example.bsbackend.domains.cart.model.dto.IssueCartDTO
import com.example.bsbackend.domains.issue.model.dto.IssueInfoDTO
import com.example.bsbackend.domains.issue.model.entity.Issue
import com.example.bsbackend.domains.issue.model.enum.BookType
import com.example.bsbackend.domains.issue.repository.IssueRepository
import com.example.bsbackend.domains.rating.model.mapToDTO
import com.example.bsbackend.domains.rating.repository.RatingRepository
import com.example.bsbackend.domains.user.model.User
import com.example.bsbackend.domains.user.repository.UserRepository
import org.modelmapper.ModelMapper
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service

@Service
class IssueService(
     val issueRepository: IssueRepository,
     val bookRepository: BookRepository,
     val ratingRepository: RatingRepository,
     val assortmentRepository: AssortmentRepository,
     val userRepository: UserRepository,
     val modelMapper: ModelMapper
) {
    fun getSingleIssue(issueId: Int): ResponseEntity<Any> =
        issueRepository.findIssueByIssueId(issueId)
            ?.let { mapIssueToDTO(it) }
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(NOT_FOUND).body("Issue with id $issueId was not found.")

    fun getAllIssues(): ResponseEntity<Any> =
        issueRepository.findAll()
            .map { mapIssueToDTO(it) }
            .let { ResponseEntity.ok(it) }

    fun getFirstIssueForBook(bookId: Int): ResponseEntity<Any> =
        getDtoOfBookFirstIssue(bookId)
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(NOT_FOUND).body("Can't find any issue for book with id $bookId.")

    fun getAllIssuesForBook(bookId: Int): ResponseEntity<Any> =
        issueRepository.findAllByBookBookId(bookId)
            .map { mapIssueToDTO(it) }
            .let { ResponseEntity.ok(it) }

    fun getFirstIssuesOfRecommendedBooks(): ResponseEntity<Any> =
        bookRepository.findFirst3ByOrderByBookId()
            .getDtoOfBooksFirstIssues()
            .let { ResponseEntity.ok(it) }

    fun getFirstIssuesOfAllBooks(): ResponseEntity<Any> =
        bookRepository.findAll()
            .getDtoOfBooksFirstIssues()
            .let { ResponseEntity.ok(it) }

    fun getFirstIssuesOfBooksByQuery(query: String): ResponseEntity<Any> =
        bookRepository.findByTitleContainingIgnoreCaseOrAuthorsFirstNameContainingIgnoreCaseOrAuthorsLastNameContainingIgnoreCase(
            query,
            query,
            query
        )
            .getDtoOfBooksFirstIssues()
            .let { ResponseEntity.ok(it) }

    fun getFirstIssuesOfBooksWithFilter(filters: FilterDTO): ResponseEntity<Any> =
        getBooksListBasedOnQuery(filters.query)
            .filter { filters.getGenres()?.contains(it.genre) ?: true }
            .getDtoOfBooksFirstIssuesWithType(filters.getType())
            .getSorted(filters)
            .let { ResponseEntity.ok(it) }

    fun checkIfIssueIsAvailableInBookstore(issueId: Int): ResponseEntity<Any> =
        getCurrentUser()
            ?.bookstore
            ?.let { assortmentRepository.existsByBookstoreAndIssueIssueId(it, issueId) }
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(BAD_REQUEST).body("Error getting information about issue availability.")

    fun sellIssueStationary(issueId: Int): ResponseEntity<Any> =
        getCurrentUser()
            ?.bookstore
            ?.let { assortmentRepository.findByBookstoreAndIssueIssueId(it, issueId) }
            ?.let {
                if (it.count > 1)
                    assortmentRepository.save(it.copy(count = it.count - 1))
                else
                    assortmentRepository.delete(it)
            }
            ?.let { ResponseEntity.ok("Successfully sold an issue.") }
            ?: ResponseEntity.status(BAD_REQUEST).body("Error selling an issue.")


    fun orderAnIssue(issueId: Int): ResponseEntity<Any> {
        val bookstore = getCurrentUser()?.bookstore
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not find bookstore of logged in user.")
        val issue = issueRepository.findIssueByIssueId(issueId)
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not issue with ID $issueId.")

        return bookstore
            .let { assortmentRepository.existsByBookstoreAndIssueIssueId(it, issueId) }
            .let {
                if (it)
                    assortmentRepository.findByBookstoreAndIssueIssueId(bookstore, issueId)
                        ?.let { x -> x.copy(count = x.count + 1) }
                else
                    Assortment(count = 1, bookstore = bookstore, issue = issue)
            }
            ?.let { assortmentRepository.save(it) }
            ?.let { ResponseEntity.ok("Successfully ordered an issue.") }
            ?: ResponseEntity.status(BAD_REQUEST).body("Error ordering an issue.")
    }


     fun getBooksListBasedOnQuery(query: String?): List<Book> =
        if (query != null) {
            bookRepository.findByTitleContainingIgnoreCaseOrAuthorsFirstNameContainingIgnoreCaseOrAuthorsLastNameContainingIgnoreCase(
                query,
                query,
                query
            )
        } else {
            bookRepository.findAll()
        }

     fun mapIssueToDTO(issue: Issue): IssueInfoDTO? {
        val issueInfoDTO: IssueInfoDTO = modelMapper.map(issue, IssueInfoDTO::class.java)
        val book = bookRepository.findByBookId(issue.book.bookId)
        val ratings = ratingRepository.findAllByBookBookId(issue.book.bookId)
        val meanScore = ratings
            .takeIf { it.isNotEmpty() }
            ?.map { it.score }
            ?.reduce { sum, element -> sum + element }
            ?.let { it.toDouble() / ratings.size }
            ?.let { "%.2f".format(it).replace(",", ".") }
            ?: "Brak"
        return book
            ?.let {
                issueInfoDTO.copy(
                    title = it.title,
                    description = it.description,
                    genre = it.genre.genre,
                    originalPublicationYear = it.originalPublicationYear,
                    authors = it.authors,
                    ratings = it.ratings.mapToDTO(),
                    meanScore = meanScore
                )
            }
    }

    fun mapIssueToCartDTO(issue: Issue, count: Int): IssueCartDTO =
        modelMapper.map(mapIssueToDTO(issue), IssueCartDTO::class.java).copy(count = count)

     fun List<Book>.getDtoOfBooksFirstIssues(): List<IssueInfoDTO?> =
        this.map { getDtoOfBookFirstIssue(it.bookId) }

     fun getDtoOfBookFirstIssue(bookId: Int): IssueInfoDTO? =
        issueRepository.findFirstByBookBookId(bookId)
            ?.let { mapIssueToDTO(it) }

     fun List<Book>.getDtoOfBooksFirstIssuesWithType(bookType: BookType?): List<IssueInfoDTO?> =
        if (bookType != null)
            this.mapNotNull { getDtoOfBookFirstIssueWithType(it.bookId, bookType) }
        else
            this.map { getDtoOfBookFirstIssue(it.bookId) }

     fun getDtoOfBookFirstIssueWithType(bookId: Int, bookType: BookType): IssueInfoDTO? =
        issueRepository.findFirstByBookBookIdAndBookType(bookId, bookType)
            ?.takeIf { it.isNotEmpty() }
            ?.first()
            ?.let { mapIssueToDTO(it) }

     fun getCurrentUser(): User? =
        userRepository.findByUsernameIgnoreCase(getCurrentUserUsername())

     fun getCurrentUserUsername(): String? =
        SecurityContextHolder.getContext().authentication.name
}