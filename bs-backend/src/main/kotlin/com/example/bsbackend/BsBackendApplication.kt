package com.example.bsbackend

import com.example.bsbackend.domains.user.model.Role
import com.example.bsbackend.domains.user.model.User
import com.example.bsbackend.domains.user.repository.UserRepository
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.boot.runApplication
import org.springframework.context.event.EventListener
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component
import java.time.Instant

@SpringBootApplication
@EnableWebSecurity
class BsBackendApplication

fun main(args: Array<String>) {
    runApplication<BsBackendApplication>(*args)
}

@Component
class ApplicationStart(val userRepository: UserRepository,
                       val passwordEncoder: PasswordEncoder) {
    @EventListener(ApplicationReadyEvent::class)
    fun addAdminsToDb() {
        val admin = User(
            1L,
            "admin",
            "admin@gmail.com",
            passwordEncoder.encode("admin"),
            "first",
            "last",
            "123456789",
            Instant.now(),
            mutableSetOf(Role.ADMIN)
        )
        val user = User(
            2L,
            "user",
            "user@gmail.com",
            passwordEncoder.encode("user"),
            "first",
            "last",
            "123456789",
            Instant.now(),
            mutableSetOf(Role.USER)
        )
        val worker = User(
            3L,
            "worker",
            "worker@gmail.com",
            passwordEncoder.encode("worker"),
            "first",
            "last",
            "123456789",
            Instant.now(),
            mutableSetOf(Role.WORKER)
        )

        userRepository.saveAll(listOf(admin, user, worker))
    }
}