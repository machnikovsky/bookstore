package com.example.bsbackend.domains.rating.repository

import com.example.bsbackend.domains.rating.model.Rating
import com.example.bsbackend.domains.user.model.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface RatingRepository : JpaRepository<Rating, Int> {
    fun findAllByBookBookId(bookId: Int): List<Rating>
    fun findAllByUser(user: User): List<Rating>
    fun findAllByUserUsernameAndBookBookId(username: String, bookId: Int): List<Rating>
    fun findByUserUsernameAndBookBookId(username: String, bookId: Int): Rating?
}