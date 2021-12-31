package com.example.bsbackend.domains.issue.repository

import com.example.bsbackend.domains.issue.model.Issue
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface IssueRepository : JpaRepository<Issue, Int> {
    fun findAll(id: Long): Issue?

}