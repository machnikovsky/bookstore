package com.example.bsbackend.repository

import com.example.bsbackend.model.Issue
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface IssueRepository: JpaRepository<Issue, Int>