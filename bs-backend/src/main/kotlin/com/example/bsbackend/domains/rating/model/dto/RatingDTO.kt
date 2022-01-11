package com.example.bsbackend.domains.rating.model.dto

import com.google.gson.annotations.SerializedName

data class RatingDTO(
    @SerializedName("rating_id") var ratingId: Int = 0,
    @SerializedName("score") var score: Int = 0,
    @SerializedName("review") var review: String = "",
    @SerializedName("book_id") var bookId: Int? = 0,
    @SerializedName("user_id") var user_id: Int? = 0,
)
