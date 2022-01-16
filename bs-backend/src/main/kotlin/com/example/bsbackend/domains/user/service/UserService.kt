package com.example.bsbackend.domains.user.service

import com.example.bsbackend.domains.user.model.*
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
import java.sql.Date
import java.time.LocalDate

@Service
class UserService(
    val userRepository: UserRepository,
    val personRepository: PersonRepository,
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

        return userRepository.save(convertedUser)
    }

    fun getUserInfo(username: String): ResponseEntity<Any> {
        val auth: Authentication = SecurityContextHolder.getContext().authentication
        return when (auth.name) {
            username -> extractUserInfoFromUsername(auth.name)
            else -> ResponseEntity.status(HttpStatus.NOT_FOUND).contentType(MediaType.APPLICATION_JSON).body("You can only get info about currently logged in user.")
        }
    }

    fun extractUserInfoFromUsername(username: String): ResponseEntity<Any> =
        userRepository.findByUsernameIgnoreCase(username)
            ?.let {
                val person: Person? = personRepository.findByPersonId(it.person.personId)
                val userInfoDto = modelMapper.map(it, UserInfoDto::class.java)
                userInfoDto.copy(firstName = person?.firstName?:"", lastName = person?.lastName?:"")
            }
            ?.let { it.copy(creationDate = it.creationDate.split("T")[0]) }
            ?.let { ResponseEntity.ok(it) }
            ?: throw RuntimeException()
}