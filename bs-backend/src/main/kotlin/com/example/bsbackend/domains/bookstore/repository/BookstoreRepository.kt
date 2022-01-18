package com.example.bsbackend.domains.bookstore.repository

import com.example.bsbackend.domains.bookstore.model.Bookstore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface BookstoreRepository : JpaRepository<Bookstore, Int> {
//    fun findById(id: Int): Bookstore
}


