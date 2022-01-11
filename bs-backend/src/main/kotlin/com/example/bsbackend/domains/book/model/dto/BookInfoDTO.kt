package com.example.bsbackend.domains.book.model.dto

import com.google.gson.annotations.SerializedName

data class BookInfoDTO(
    @SerializedName("book_id") var bookId: Int = 0,
    @SerializedName("title") var title: String = "",
    @SerializedName("genre") var genre: String = "",
    @SerializedName("original_publication_year") var originalPublicationYear: Int = 0,
)

