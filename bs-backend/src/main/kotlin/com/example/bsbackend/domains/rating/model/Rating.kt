package com.example.bsbackend.domains.rating.model

import com.example.bsbackend.domains.book.model.entity.Book
import com.example.bsbackend.domains.user.model.User
import javax.persistence.*


@Entity(name = "rating")
data class Rating(
    @Column(name = "rating_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var ratingId: Int = 0,
    @Column(name = "score") var score: Int,
    @Column(name = "review") var review: String,
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "book_id", referencedColumnName = "book_id") var book: Book,
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "account_id", referencedColumnName = "account_id") var user: User
)
