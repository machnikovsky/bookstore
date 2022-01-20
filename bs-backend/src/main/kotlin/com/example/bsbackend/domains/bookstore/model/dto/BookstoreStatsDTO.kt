package com.example.bsbackend.domains.bookstore.model.dto

import com.google.gson.annotations.SerializedName

data class BookstoreStatsDTO(
    @SerializedName("income") var income: Float = 0.0f,
    @SerializedName("sold_books") var soldBooks: Int = 0
)
