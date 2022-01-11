package com.example.bsbackend.domains.rating.repository

import com.example.bsbackend.domains.rating.model.Rating
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface RatingRepository : JpaRepository<Rating, Int> {
    fun findAllByBookBookId(bookId: Int): List<Rating>
}