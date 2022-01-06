package com.example.bsbackend.domains.issue.exception

class InvalidIssueIdException (private val issueId: String): RuntimeException(issueId)
