package com.example.bsbackend

import com.example.bsbackend.domains.user.model.Gender
import com.example.bsbackend.domains.user.model.Person
import com.example.bsbackend.domains.user.model.Role
import com.example.bsbackend.domains.user.model.User
import com.example.bsbackend.domains.user.repository.PersonRepository
import com.example.bsbackend.domains.user.repository.UserRepository
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.boot.runApplication
import org.springframework.context.event.EventListener
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component
import java.sql.Date
import java.time.LocalDate

@SpringBootApplication
@EnableWebSecurity
class BsBackendApplication

fun main(args: Array<String>) {
    runApplication<BsBackendApplication>(*args)
}

@Component
class ApplicationStart(
    val userRepository: UserRepository,
    val personRepository: PersonRepository,
    val passwordEncoder: PasswordEncoder
) {
    @EventListener(ApplicationReadyEvent::class)
    fun addAdminsToDb() {
        val personAdmin = Person(
            firstName = "Weronika",
            lastName = "Abc",
            phoneNumber = "1234",
            gender = Gender.FEMALE
        )

        val personWorker = Person(
            firstName = "Kuba",
            lastName = "Abc",
            phoneNumber = "1234",
            gender = Gender.MALE
        )

        val personUser = Person(
            firstName = "Rudolf",
            lastName = "Abc",
            phoneNumber = "1234",
            gender = Gender.OTHER
        )

        personRepository.saveAll(listOf(personAdmin, personUser, personWorker))


        val admin = User(
            username = "admin",
            password = passwordEncoder.encode("admin"),
            email = "admin@gmail.com",
            creationDate = Date.valueOf(LocalDate.now()),
            roles = mutableSetOf(Role.ADMIN),
            person = personAdmin
        )

        val user = User(
            username = "user",
            password = passwordEncoder.encode("user"),
            email = "user@gmail.com",
            creationDate = Date.valueOf(LocalDate.now()),
            roles = mutableSetOf(Role.USER),
            person = personUser
        )

        val worker = User(
            username = "worker",
            password = passwordEncoder.encode("worker"),
            email = "worker@gmail.com",
            creationDate = Date.valueOf(LocalDate.now()),
            roles = mutableSetOf(Role.WORKER),
            person = personWorker
        )
        userRepository.saveAll(listOf(admin, user, worker))
    }
}