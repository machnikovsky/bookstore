package com.example.bsbackend.domains.author.repository

import com.example.bsbackend.domains.author.model.Author
import com.example.bsbackend.domains.book.model.entity.Book
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface AuthorRepository : JpaRepository<Author, Int> {
    fun findByFirstNameAndLastName(firstName: String, lastName: String, ): Author?
}


