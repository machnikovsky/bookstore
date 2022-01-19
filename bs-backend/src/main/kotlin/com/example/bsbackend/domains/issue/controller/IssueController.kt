package com.example.bsbackend.domains.issue.controller

import com.example.bsbackend.domains.book.model.dto.FilterDTO
import com.example.bsbackend.domains.issue.model.dto.AddIssueDTO
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

    @GetMapping("/{issueId}/other")
    fun getOtherIssues(@PathVariable("issueId") issueId: Int): ResponseEntity<Any> =
        issueService.getOtherIssues(issueId)

    @GetMapping("/all")
    fun getAllIssues(): ResponseEntity<Any> =
        issueService.getAllIssues()

    @GetMapping("/all/first")
    fun getFirstIssuesOfAllBooks(): ResponseEntity<Any> =
        issueService.getFirstIssuesOfAllBooks()

    @GetMapping("/query/{query}")
    fun getFirstIssuesOfBooksByQuery(@PathVariable("query") query: String): ResponseEntity<Any> =
        issueService.getFirstIssuesOfBooksByQuery(query)

    @PostMapping("/filter")
    fun getFirstIssuesOfBooksWithFilter(@RequestBody filters: FilterDTO): ResponseEntity<Any> =
        issueService.getFirstIssuesOfBooksWithFilter(filters)

    @GetMapping("/{issueId}/available")
    fun checkIfIssueIsAvailableInBookstore(@PathVariable("issueId") issueId: Int): ResponseEntity<Any> =
        issueService.checkIfIssueIsAvailableInBookstore(issueId)

    @PostMapping("/{issueId}/sell")
    fun sellIssueStationary(@PathVariable("issueId") issueId: Int): ResponseEntity<Any> =
        issueService.sellIssueStationary(issueId)

    @PostMapping("/{issueId}/order")
    fun orderAnIssue(@PathVariable("issueId") issueId: Int): ResponseEntity<Any> =
        issueService.orderAnIssue(issueId)

    @PostMapping("/add")
    fun addNewIssue(@RequestBody addIssueDTO: AddIssueDTO): ResponseEntity<Any> =
        issueService.addNewIssue(addIssueDTO)

}