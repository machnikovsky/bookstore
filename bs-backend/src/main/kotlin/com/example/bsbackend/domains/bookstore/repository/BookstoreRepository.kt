package com.example.bsbackend.domains.bookstore.repository

import com.example.bsbackend.domains.bookstore.model.entity.Bookstore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface BookstoreRepository : JpaRepository<Bookstore, Int> {
    fun findByAddress(address: String): Bookstore
}


