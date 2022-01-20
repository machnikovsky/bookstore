package com.example.bsbackend.domains.user.service

import com.example.bsbackend.domains.bookstore.repository.BookstoreRepository
import com.example.bsbackend.domains.cart.repository.CartPositionRepository
import com.example.bsbackend.domains.cart.repository.CartRepository
import com.example.bsbackend.domains.issue.service.IssueService
import com.example.bsbackend.domains.rating.repository.RatingRepository
import com.example.bsbackend.domains.user.model.dto.UserInfoDto
import com.example.bsbackend.domains.user.model.dto.UserRegistrationDto
import com.example.bsbackend.domains.user.model.dto.UserStatsDTO
import com.example.bsbackend.domains.user.model.dto.UserUpdateInfoDto
import com.example.bsbackend.domains.user.model.entity.Person
import com.example.bsbackend.domains.user.model.entity.Role
import com.example.bsbackend.domains.user.model.entity.User
import com.example.bsbackend.domains.user.repository.PersonRepository
import com.example.bsbackend.domains.user.repository.UserRepository
import org.modelmapper.ModelMapper
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.sql.Date
import java.time.LocalDate

@Service
class UserService(
    val userRepository: UserRepository,
    val bookstoreRepository: BookstoreRepository,
    val personRepository: PersonRepository,
    val cartRepository: CartRepository,
    val cartPositionRepository: CartPositionRepository,
    val ratingRepository: RatingRepository,
    val issueService: IssueService,
    val passwordEncoder: PasswordEncoder,
    val modelMapper: ModelMapper
) {
    fun getAllUsers(): List<User> = userRepository.findAll()

    fun registerUser(userRegistrationDto: UserRegistrationDto): User? {
        val convertedPerson: Person = modelMapper.map(userRegistrationDto, Person::class.java)
        val savedPerson = personRepository.save(convertedPerson)

        val convertedUser = modelMapper.map(userRegistrationDto, User::class.java)
        convertedUser.password = passwordEncoder.encode(userRegistrationDto.password)
        convertedUser.roles = mutableSetOf(Role.USER)
        convertedUser.creationDate = Date.valueOf(LocalDate.now())
        convertedUser.person = savedPerson
        convertedUser.bookstore = bookstoreRepository.findByAddress(userRegistrationDto.localization)

        return userRepository.save(convertedUser)
    }

    fun getUserInfo(username: String): ResponseEntity<Any> {
        val auth: Authentication = SecurityContextHolder.getContext().authentication
        return when (auth.name) {
            username -> extractUserInfoFromUsername(auth.name)
            else -> ResponseEntity.status(HttpStatus.NOT_FOUND).contentType(MediaType.APPLICATION_JSON)
                .body("You can only get info about currently logged in user.")
        }
    }

    fun promoteUser(username: String): ResponseEntity<Any> =
        userRepository.findByUsernameIgnoreCase(username)
            ?.let {
                it.copy(
                    roles = when (it.roles) {
                        mutableSetOf(Role.USER) -> mutableSetOf(Role.WORKER)
                        mutableSetOf(Role.WORKER) -> mutableSetOf(Role.ADMIN)
                        mutableSetOf(Role.ADMIN) -> mutableSetOf(Role.ADMIN)
                        else -> it.roles
                    }
                )
            }
            ?.let { userRepository.save(it) }
            ?.let { modelMapper.map(it, UserInfoDto::class.java) }
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Could not promote user.")


    fun findUsersByQuery(query: String): ResponseEntity<Any> =
        userRepository.findAllByUsernameContainingIgnoreCase(query)
            .map { modelMapper.map(it, UserInfoDto::class.java) }
            .let { ResponseEntity.ok(it) }

    fun extractUserInfoFromUsername(username: String): ResponseEntity<Any> =
        userRepository.findByUsernameIgnoreCase(username)
            ?.let {
                val person: Person? = personRepository.findByPersonId(it.person.personId)
                val userInfoDto = modelMapper.map(it, UserInfoDto::class.java)
                userInfoDto.copy(firstName = person?.firstName ?: "", lastName = person?.lastName ?: "")
            }
            ?.let { it.copy(creationDate = it.creationDate.split("T")[0]) }
            ?.let { ResponseEntity.ok(it) }
            ?: throw RuntimeException()

    fun updateUserInfo(userUpdateInfoDto: UserUpdateInfoDto): ResponseEntity<Any> {
        val auth: Authentication = SecurityContextHolder.getContext().authentication
        val loggedInUser: User = userRepository.findByUsernameIgnoreCase(auth.name)
            ?: return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Couldn't update user info.")
        val person = personRepository.findByPersonId(loggedInUser.person.personId)
            ?: return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Couldn't update user info.")
        personRepository.save(
            person.copy(
                firstName = userUpdateInfoDto.firstName ?: person.firstName,
                lastName = userUpdateInfoDto.lastName ?: person.lastName
            )
        )
        userRepository.save(loggedInUser.copy(
            email = userUpdateInfoDto.email ?: loggedInUser.email,
            password = userUpdateInfoDto.password
                ?.let { passwordEncoder.encode(it) }
                ?: loggedInUser.password
        ))
        return ResponseEntity.ok("Successfully updated")
    }

    @Transactional
    fun removeAccount(): ResponseEntity<Any> =
        SecurityContextHolder.getContext().authentication
            .let { userRepository.findByUsernameIgnoreCase(it.name) }
            ?.also {
                userRepository.removeUserByUserId(it.userId)
                personRepository.removePersonByPersonId(it.person.personId)
                cartRepository.findByUser(it)
                    ?.also { cart -> cartPositionRepository.removeAllByCart(cart) }
                    ?.let { cart -> cartRepository.delete(cart) }
            }
            ?.let { ResponseEntity.ok("You successfully removed your account.") }
            ?: ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.")

    fun getUserStats(): ResponseEntity<Any> =
        getLoggedInUser()
            ?.let { ratingRepository.findAllByUser(it) }
            ?.let {
                UserStatsDTO(
                    books = it.size,
                    pages = it
                        .map { rating -> issueService.getDtoOfBookFirstIssue(rating.book.bookId) }
                        .map { issue -> issue?.numberOfPages ?: 0 }
                        .takeIf { pages -> pages.isNotEmpty() }
                        ?.reduce { sum, value -> sum + value }
                        ?: 0,
                    meanScore = it
                        .map { rating -> rating.score }
                        .takeIf { ratings -> ratings.isNotEmpty() }
                        ?.reduce { sum, value -> sum + value }
                        ?.let { totalScore -> totalScore.toDouble() / it.filter { rating -> rating.score != 0 }.size }
                        ?: 0.0
                )
            }
            ?.let { ResponseEntity.ok(it) }
            ?: ResponseEntity.status(HttpStatus.NOT_FOUND).body("Could not get user stats.")

    private fun getLoggedInUser(): User? =
        SecurityContextHolder.getContext().authentication.name
            .let { userRepository.findByUsernameIgnoreCase(it) }


}