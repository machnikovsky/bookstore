package com.example.bsbackend.domains.book.repository

import com.example.bsbackend.domains.author.model.Author
import com.example.bsbackend.domains.book.model.entity.Book
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BookRepository : JpaRepository<Book, Int> {
    fun findByBookId(id: Int): Book?
    fun findByTitleContainingIgnoreCaseOrAuthorsFirstNameContainingIgnoreCaseOrAuthorsLastNameContainingIgnoreCase(
        title: String,
        firstName: String,
        lastName: String,
    ): List<Book>
    fun findFirst3ByOrderByBookId(): List<Book>
    fun findByTitleAndAuthorsIn(title: String, authors: MutableList<Author>): Book?
}
