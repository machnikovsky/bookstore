package com.example.bsbackend.domains.book.service

import com.example.bsbackend.domains.book.model.dto.BookInfoDTO
import com.example.bsbackend.domains.book.model.entity.Book
import com.example.bsbackend.domains.book.repository.BookRepository
import org.modelmapper.ModelMapper
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class BookService(
    private val bookRepository: BookRepository,
    private val modelMapper: ModelMapper
) {
    fun getAllBooks(): ResponseEntity<Any> =
        bookRepository.findAll()
            .map { mapBookToDTO(it) }
            .let { ResponseEntity.ok(it) }

    fun getSingleBook(bookId: Int): ResponseEntity<Any> =
        bookRepository.findByBookId(bookId)
            ?.let { mapBookToDTO(it) }
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(NOT_FOUND).body("Book with id $bookId was not found.")

    private fun mapBookToDTO(book: Book): BookInfoDTO =
        modelMapper.map(book, BookInfoDTO::class.java)
}