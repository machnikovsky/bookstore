package com.example.bsbackend.domains.issue.exception

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseBody

@ControllerAdvice
class QueryExceptionHandler {

    @ResponseBody
    @ExceptionHandler(InvalidQueryException::class)
    fun handleInvalidQueryException(e: InvalidQueryException): ResponseEntity<String> {
        val status: HttpStatus = HttpStatus.NOT_FOUND;
        return ResponseEntity("Invalid Query: ${e.message}", status);
    }

    @ResponseBody
    @ExceptionHandler(InvalidIssueIdException::class)
    fun handleInvalidIssueIdException(e: InvalidIssueIdException): ResponseEntity<String> {
        val status: HttpStatus = HttpStatus.NOT_FOUND;
        return ResponseEntity("Invalid Issue ID: ${e.message}", status);
    }

}