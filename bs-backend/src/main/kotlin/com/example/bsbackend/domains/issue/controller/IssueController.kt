package com.example.bsbackend.domains.issue.controller

import com.example.bsbackend.domains.issue.service.IssueService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/issue")
@CrossOrigin(origins = ["http://localhost:3000"])
class IssueController(val issueService: IssueService) {

    @GetMapping("/{issueId}")
    fun getAllIssues(@PathVariable("issueId") issueId: Int): ResponseEntity<Any> =
        issueService.getSingleIssue(issueId)

    @GetMapping("/all")
    fun getAllIssues(): ResponseEntity<Any> =
        issueService.getAllIssues()

    @GetMapping("/all/first")
    fun getFirstIssuesOfAllBooks(): ResponseEntity<Any> =
        issueService.getFirstIssuesOfAllBooks()

    @GetMapping("/query/{query}")
    fun getFirstIssuesOfBooksByQuery(@PathVariable("query") query: String): ResponseEntity<Any> =
        issueService.getFirstIssuesOfBooksByQuery(query)
}