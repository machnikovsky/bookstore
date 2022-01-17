package com.example.bsbackend.domains.assortment.repository

import com.example.bsbackend.domains.assortment.model.Assortment
import com.example.bsbackend.domains.bookstore.model.Bookstore
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface AssortmentRepository : JpaRepository<Assortment, Int> {
    fun existsByBookstoreAndIssueIssueId(bookstore: Bookstore, issueId: Int): Boolean
    fun findByBookstoreAndIssueIssueId(bookstore: Bookstore, issueId: Int): Assortment?
}


