package com.example.bsbackend.domains.rating.controller

import com.example.bsbackend.domains.rating.model.dto.AddRatingDTO
import com.example.bsbackend.domains.rating.service.RatingService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/rating")
@CrossOrigin(origins = ["http://localhost:3000"])
class RatingController(private val ratingService: RatingService) {

    @PostMapping("/add")
    fun addRating(@RequestBody addRatingDTO: AddRatingDTO) = ratingService.addRating(addRatingDTO)

    @GetMapping("/{bookId}/reviews")
    fun getReviewsOfBook(@PathVariable("bookId") bookId: Int) = ratingService.getReviewsOfBook(bookId)

    @GetMapping("/{bookId}/isRead")
    fun isRead(@PathVariable("bookId") bookId: Int) = ratingService.isRead(bookId)

    @GetMapping("/{bookId}/user")
    fun getUserRating(@PathVariable("bookId") bookId: Int) = ratingService.getUserRating(bookId)
}