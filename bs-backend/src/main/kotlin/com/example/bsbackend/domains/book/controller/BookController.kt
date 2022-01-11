package com.example.bsbackend.domains.book.controller

import com.example.bsbackend.domains.book.service.BookService
import com.example.bsbackend.domains.issue.service.IssueService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/book")
@CrossOrigin(origins = ["http://localhost:3000"])
class BookController(
    private val bookService: BookService,
    private val issueService: IssueService
) {

    @GetMapping("/{bookId}")
    fun getSingleBook(@PathVariable("bookId") bookId: Int): ResponseEntity<Any> =
        bookService.getSingleBook(bookId)

    @GetMapping("/all")
    fun getAllBooks(): ResponseEntity<Any> =
        bookService.getAllBooks()

    @GetMapping("/{bookId}/issue")
    fun getFirstIssueOfBook(@PathVariable("bookId") bookId: Int): ResponseEntity<Any> =
        issueService.getFirstIssueForBook(bookId)

    @GetMapping("/{bookId}/issue/all")
    fun getAllIssuesOfBook(@PathVariable("bookId") bookId: Int): ResponseEntity<Any> =
        issueService.getAllIssuesForBook(bookId)
}