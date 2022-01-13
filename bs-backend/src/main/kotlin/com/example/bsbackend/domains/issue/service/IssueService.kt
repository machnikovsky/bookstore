package com.example.bsbackend.domains.issue.service

import com.example.bsbackend.domains.book.model.dto.FilterDTO
import com.example.bsbackend.domains.book.model.dto.getGenres
import com.example.bsbackend.domains.book.model.entity.Book
import com.example.bsbackend.domains.book.repository.BookRepository
import com.example.bsbackend.domains.issue.model.dto.IssueInfoDTO
import com.example.bsbackend.domains.issue.model.entity.Issue
import com.example.bsbackend.domains.issue.repository.IssueRepository
import com.example.bsbackend.domains.rating.model.mapToDTO
import com.example.bsbackend.domains.rating.repository.RatingRepository
import org.modelmapper.ModelMapper
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class IssueService(
    private val issueRepository: IssueRepository,
    private val bookRepository: BookRepository,
    private val ratingRepository: RatingRepository,
    private val modelMapper: ModelMapper
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
            .getDtoOfBooksFirstIssues()
            .let { ResponseEntity.ok(it) }

    private fun getBooksListBasedOnQuery(query: String?): List<Book> =
        if (query != null) {
            bookRepository.findByTitleContainingIgnoreCaseOrAuthorsFirstNameContainingIgnoreCaseOrAuthorsLastNameContainingIgnoreCase(
                query ?: "",
                query ?: "",
                query ?: ""
            )
        } else {
            bookRepository.findAll()
        }

    private fun mapIssueToDTO(issue: Issue): IssueInfoDTO? {
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

    fun getFirstIssuesOfRecommendedBooks(): ResponseEntity<Any> =
        bookRepository.findFirst3ByOrderByBookId()
            .getDtoOfBooksFirstIssues()
            .let { ResponseEntity.ok(it) }

    private fun List<Book>.getDtoOfBooksFirstIssues(): List<IssueInfoDTO?> =
        this.map { getDtoOfBookFirstIssue(it.bookId) }

    private fun getDtoOfBookFirstIssue(bookId: Int): IssueInfoDTO? =
        issueRepository.findFirstByBookBookId(bookId)
            ?.let { mapIssueToDTO(it) }
}