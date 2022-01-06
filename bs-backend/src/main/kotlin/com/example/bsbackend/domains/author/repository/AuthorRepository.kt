package com.example.bsbackend.domains.author.repository

import com.example.bsbackend.domains.author.model.Author
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface AuthorRepository : JpaRepository<Author, Int>


