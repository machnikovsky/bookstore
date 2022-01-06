package com.example.bsbackend.domains.book.repository

import com.example.bsbackend.domains.book.model.Book
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BookRepository : JpaRepository<Book, Int>
