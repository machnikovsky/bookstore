package com.example.bsbackend.domains.issue.exception

class InvalidQueryException(private val query: String): RuntimeException(query)