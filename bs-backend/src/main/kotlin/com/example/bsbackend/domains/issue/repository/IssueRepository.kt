package com.example.bsbackend.domains.issue.repository

import com.example.bsbackend.domains.issue.model.entity.Issue
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface IssueRepository : JpaRepository<Issue, Int> {
    fun findIssueByIssueId(issueId: Int): Issue?
    fun findFirstByBookId(bookId: Int): Issue?
    fun findAllByBookId(bookId: Int): List<Issue>
}