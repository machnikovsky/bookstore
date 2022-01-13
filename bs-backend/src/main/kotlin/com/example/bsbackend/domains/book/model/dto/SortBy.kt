package com.example.bsbackend.domains.book.model.dto

enum class SortBy(val dtoName: String) {
    VOTE_AVG_DESC("vote_average.desc"),
    VOTE_AVG_ASC("vote_average.asc"),
    PRICE_DESC("price.desc"),
    PRICE_ASC("price.asc"),
    PUBLISHED_DATE_DESC("published_date.desc"),
    PUBLISHED_DATE_ASC("published_date.asc")
}