package com.example.bsbackend.domains.rating.model.dto

import com.example.bsbackend.domains.book.model.entity.Book
import com.example.bsbackend.domains.rating.model.Rating
import com.example.bsbackend.domains.user.model.entity.User
import com.google.gson.annotations.SerializedName

data class RatingDTO(
    @SerializedName("score") var score: Int = 0,
    @SerializedName("review") var review: String? = "",
    @SerializedName("book_id") var bookId: Int = 0,
    @SerializedName("user_id") var userId: Int = 0,
    @SerializedName("username") var username: String = "",
)

fun RatingDTO.mapToRating(book: Book, user: User): Rating =
    Rating(
        score = this.score,
        review = this.review,
        book = book,
        user = user
    )