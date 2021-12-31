package com.example.bsbackend.domains.issue.controller

import com.example.bsbackend.domains.issue.model.Issue
import com.example.bsbackend.domains.issue.repository.IssueRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class IssueController(val issueRepository: IssueRepository) {

    @GetMapping("/issue/all")
    fun getAllIssues(): List<Issue> {
        return issueRepository.findAll()
    }
}