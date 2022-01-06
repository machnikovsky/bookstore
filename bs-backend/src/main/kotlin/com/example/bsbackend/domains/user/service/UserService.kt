package com.example.bsbackend.domains.user.service

import com.example.bsbackend.domains.user.model.Role
import com.example.bsbackend.domains.user.model.User
import com.example.bsbackend.domains.user.model.UserRegistrationDto
import com.example.bsbackend.domains.user.repository.UserRepository
import org.modelmapper.ModelMapper
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.sql.Date
import java.sql.Timestamp
import java.time.Instant
import java.time.LocalDate

@Service
class UserService(
    val userRepository: UserRepository,
    val passwordEncoder: PasswordEncoder
) {

    val modelMapper: ModelMapper = ModelMapper()

    fun getAllUsers(): List<User> = userRepository.findAll()

    fun registerUser(userRegistrationDto: UserRegistrationDto): User? {
        val convertedUser = modelMapper.map(userRegistrationDto, User::class.java)
        convertedUser.password = passwordEncoder.encode(userRegistrationDto.password)
        convertedUser.roles = mutableSetOf(Role.USER)
        convertedUser.creationDate = Date.valueOf(LocalDate.now())

        return userRepository.save(convertedUser)
    }
}