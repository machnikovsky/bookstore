package com.example.bsbackend.domains.bookstore.controller

import com.example.bsbackend.domains.bookstore.service.BookstoreService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/bookstore")
@CrossOrigin(origins = ["http://localhost:3000"])
class BookstoreController(val bookstoreService: BookstoreService) {

    @GetMapping("/stats")
    fun getAllIssues(): ResponseEntity<Any> =
        bookstoreService.getStats()

}