package com.example.bsbackend.domains.assortment.repository

import com.example.bsbackend.domains.assortment.model.Assortment
import com.example.bsbackend.domains.bookstore.model.entity.Bookstore
import com.example.bsbackend.domains.issue.model.entity.Issue
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional


@Repository
interface AssortmentRepository : JpaRepository<Assortment, Int> {
    fun existsByBookstoreAndIssueIssueId(bookstore: Bookstore, issueId: Int): Boolean
    fun findByBookstoreAndIssueIssueId(bookstore: Bookstore, issueId: Int): Assortment?
    fun findByIssue(issue: Issue): Assortment?

    @Transactional
    @Modifying
    fun removeByIssue(issue: Issue): Assortment?
}


