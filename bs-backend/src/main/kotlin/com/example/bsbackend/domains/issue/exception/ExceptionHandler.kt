package com.example.bsbackend.domains.issue.exception

import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseBody

@ControllerAdvice
class QueryExceptionHandler {

    @ResponseBody
    @ExceptionHandler(InvalidQueryException::class)
    fun handleInvalidQueryException(e: InvalidQueryException): ResponseEntity<String> =
        ResponseEntity("Invalid Query: ${e.message}", NOT_FOUND);

    @ResponseBody
    @ExceptionHandler(InvalidIssueIdException::class)
    fun handleInvalidIssueIdException(e: InvalidIssueIdException): ResponseEntity<String> =
        ResponseEntity("Invalid Issue ID: ${e.message}", NOT_FOUND);

}