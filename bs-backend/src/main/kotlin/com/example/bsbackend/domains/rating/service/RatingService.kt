package com.example.bsbackend.domains.rating.service

import com.example.bsbackend.domains.book.repository.BookRepository
import com.example.bsbackend.domains.issue.service.IssueService
import com.example.bsbackend.domains.rating.model.Rating
import com.example.bsbackend.domains.rating.model.dto.AddRatingDTO
import com.example.bsbackend.domains.rating.model.dto.mapToRating
import com.example.bsbackend.domains.rating.model.mapToDTO
import com.example.bsbackend.domains.rating.repository.RatingRepository
import com.example.bsbackend.domains.user.model.entity.User
import com.example.bsbackend.domains.user.repository.UserRepository
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.http.ResponseEntity
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service

@Service
class RatingService(
    private val ratingRepository: RatingRepository,
    private val userRepository: UserRepository,
    private val bookRepository: BookRepository,
    private val issueService: IssueService
) {

    fun addRating(addRatingDTO: AddRatingDTO): ResponseEntity<Any> =
        mapDtoToRating(addRatingDTO)
            ?.let { ratingRepository.save(it) }
            ?.mapToDTO()
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(BAD_REQUEST).body("Could not add rating to database.")

    fun getReviewsOfBook(bookId: Int): ResponseEntity<Any> =
        ratingRepository.findAllByBookBookId(bookId)
            .filter { it.review != null }
            .mapToDTO()
            .let { ResponseEntity.ok(it) }

    fun isRead(bookId: Int): ResponseEntity<Any> =
        getCurrentUserUsername()
            ?.let { ratingRepository.findAllByUserUsernameAndBookBookId(it, bookId) }
            ?.isNotEmpty()
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(BAD_REQUEST).body("Could not find out if book was read.")

    fun getUserRatingResponse(bookId: Int): ResponseEntity<Any> =
        getCurrentUserUsername()
            ?.let { ratingRepository.findByUserUsernameAndBookBookId(it, bookId) }
            ?.mapToDTO()
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(BAD_REQUEST).body("Could not find book rating.")


    fun getAllBooksRatedByUser(username: String): ResponseEntity<Any> =
        getCurrentUser(username)
            ?.let { ratingRepository.findAllByUser(it) }
            ?.map { issueService.getDtoOfBookFirstIssue(it.book.bookId) }
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(BAD_REQUEST).body("Could not books rated by user.")

    private fun mapDtoToRating(addRatingDTO: AddRatingDTO): Rating? {
        val book = bookRepository.findByBookId(addRatingDTO.bookId) ?: return null
        val user = userRepository.findByUsernameIgnoreCase(addRatingDTO.username) ?: return null
        return addRatingDTO.mapToRating(book, user)
    }

    private fun getCurrentUser(username: String): User? =
        userRepository.findByUsernameIgnoreCase(username)

    private fun getCurrentUserUsername(): String? =
        SecurityContextHolder.getContext().authentication.name


}