package com.example.bsbackend.domains.issue.service

import com.example.bsbackend.domains.book.model.entity.Book
import com.example.bsbackend.domains.book.repository.BookRepository
import com.example.bsbackend.domains.issue.model.dto.IssueInfoDTO
import com.example.bsbackend.domains.issue.model.entity.Issue
import com.example.bsbackend.domains.issue.repository.IssueRepository
import org.modelmapper.ModelMapper
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class IssueService(
    private val issueRepository: IssueRepository,
    private val bookRepository: BookRepository,
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
        issueRepository.findAllByBookId(bookId)
            .map { mapIssueToDTO(it) }
            .let { ResponseEntity.ok(it) }


    fun getFirstIssuesOfAllBooks(): ResponseEntity<Any> =
        getDtoOfBooksFirstIssues(bookRepository.findAll())
            .let { ResponseEntity.ok(it) }

    fun getFirstIssuesOfBooksByQuery(query: String): ResponseEntity<Any> =
        getDtoOfBooksFirstIssues(
            bookRepository.findByTitleContainingIgnoreCaseOrAuthorsFirstNameContainingIgnoreCaseOrAuthorsLastNameContainingIgnoreCase(query, query, query)
        )
            .let { ResponseEntity.ok(it) }


    private fun mapIssueToDTO(issue: Issue): IssueInfoDTO? {
        val issueInfoDTO: IssueInfoDTO = modelMapper.map(issue, IssueInfoDTO::class.java)
        return bookRepository.findByBookId(issue.bookId)
            ?.let {
                issueInfoDTO.copy(
                    title = it.title,
                    genre = it.genre.genre,
                    originalPublicationYear = it.originalPublicationYear,
                    authors = it.authors
                )
            }
    }

    private fun getDtoOfBooksFirstIssues(books: List<Book>) =
        books.map { getDtoOfBookFirstIssue(it.bookId) }

    private fun getDtoOfBookFirstIssue(bookId: Int): IssueInfoDTO? =
        issueRepository.findFirstByBookId(bookId)
            ?.let { mapIssueToDTO(it) }

}