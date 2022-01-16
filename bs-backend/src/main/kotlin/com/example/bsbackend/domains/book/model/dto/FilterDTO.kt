package com.example.bsbackend.domains.book.model.dto

import com.example.bsbackend.domains.book.model.entity.Genre
import com.example.bsbackend.domains.issue.model.dto.IssueInfoDTO
import com.example.bsbackend.domains.issue.model.entity.Issue
import com.example.bsbackend.domains.issue.model.enum.BookType
import com.google.gson.annotations.SerializedName

data class FilterDTO(
    @SerializedName("query") var query: String? = "",
    @SerializedName("genres") var genres: List<String>?,
    @SerializedName("sort_by") var sortBy: String? = "",
    @SerializedName("type") var type: String? = "",
)

fun FilterDTO.getGenres(): List<Genre>? {
    val genres = this.genres ?: return null
    val genresEnum = Genre.values()
    return genresEnum.filter { genres.contains(it.genre) }
}

fun List<IssueInfoDTO?>.getSorted(filter: FilterDTO): List<IssueInfoDTO?> = when (filter.sortBy) {
    SortBy.PRICE_ASC.dtoName -> this.sortedBy { it?.price }
    SortBy.PRICE_DESC.dtoName -> this.sortedBy { it?.price }.asReversed()
    SortBy.PUBLISHED_DATE_ASC.dtoName -> this.sortedBy { it?.publicationYear }
    SortBy.PUBLISHED_DATE_DESC.dtoName -> this.sortedBy { it?.publicationYear }.asReversed()
    SortBy.VOTE_AVG_ASC .dtoName -> this.sortedBy { it?.meanScore?.toDoubleOrNull() }
    SortBy.VOTE_AVG_DESC.dtoName -> this.sortedBy { it?.meanScore?.toDoubleOrNull() }.asReversed()
    else -> this
}

fun FilterDTO.getType(): BookType? =
    when (this.type) {
        "book" -> BookType.BOOK
        "ebook" -> BookType.EBOOK
        "audiobook" -> BookType.AUDIOBOOK
        else -> null
    }
