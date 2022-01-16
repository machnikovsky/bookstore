package com.example.bsbackend.domains.rating.model

import com.example.bsbackend.domains.book.model.entity.Book
import com.example.bsbackend.domains.rating.model.dto.RatingDTO
import com.example.bsbackend.domains.user.model.User
import javax.persistence.*


@Entity(name = "rating")
data class Rating(
    @Column(name = "rating_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var ratingId: Int = 0,
    @Column(name = "score") var score: Int,
    @Column(name = "review") var review: String?,
    @OneToOne
    @JoinColumn(name = "book_id", referencedColumnName = "book_id") var book: Book,
    @OneToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id") var user: User
)

fun List<Rating>.mapToDTO(): List<RatingDTO> =
    this.map { RatingDTO(it.score, it.review, it.book.bookId, it.user.userId, it.user.username) }

fun Rating.mapToDTO(): RatingDTO =
    RatingDTO(this.score, this.review, this.book.bookId, this.user.userId, this.user.username)

