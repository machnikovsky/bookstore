package com.example.bsbackend

import com.example.bsbackend.domains.bookstore.repository.BookstoreRepository
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
import java.util.*

@SpringBootApplication
@EnableWebSecurity
class BsBackendApplication

fun main(args: Array<String>) {
    runApplication<BsBackendApplication>(*args)
}

@Component
class ApplicationStart(
    val bookstoreRepository: BookstoreRepository,
    val userRepository: UserRepository,
    val personRepository: PersonRepository,
    val encoder: PasswordEncoder
) {
    @EventListener(ApplicationReadyEvent::class)
    fun addAdminsToDb() {

        bookstoreRepository.findAll()
            .forEach {
                Role.values().forEach { role ->
                    userRepository.save(
                        User(
                            username = "${role.name.lowercase(Locale.getDefault())}${it.address}",
                            password = encoder.encode("password"),
                            email = "admin@gmail.com",
                            creationDate = Date.valueOf(LocalDate.now()),
                            roles = mutableSetOf(role),
                            person = personRepository.save(
                                Person(
                                    firstName = "John",
                                    lastName = role.name.lowercase(Locale.getDefault()),
                                    phoneNumber = "1234",
                                    gender = Gender.FEMALE
                                )
                            ),
                            bookstore = it
                        )
                    )
                }
            }
    }
}