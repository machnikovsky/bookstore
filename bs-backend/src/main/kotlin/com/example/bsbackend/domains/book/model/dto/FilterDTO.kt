package com.example.bsbackend.domains.book.model.dto

import com.example.bsbackend.domains.book.model.entity.Genre
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

fun FilterDTO.getSortBy(): SortBy =
    SortBy.values().first { this.sortBy == it.dtoName }

fun FilterDTO.getType(): BookType? =
    when (this.type) {
        "book" -> BookType.BOOK
        "ebook" -> BookType.EBOOK
        "audiobook" -> BookType.AUDIOBOOK
        else -> null
    }
