package com.example.bsbackend.domains.user.service

import com.example.bsbackend.domains.user.model.Role
import com.example.bsbackend.domains.user.model.User
import com.example.bsbackend.domains.user.model.UserRegistrationDto
import com.example.bsbackend.domains.user.repository.UserRepository
import org.modelmapper.ModelMapper
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.time.Instant

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
        convertedUser.creationDate = Instant.now()

        return userRepository.save(convertedUser)
    }
}