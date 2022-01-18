package com.example.bsbackend

import com.example.bsbackend.domains.assortment.repository.AssortmentRepository
import com.example.bsbackend.domains.author.model.Author
import com.example.bsbackend.domains.author.repository.AuthorRepository
import com.example.bsbackend.domains.book.model.entity.Book
import com.example.bsbackend.domains.book.model.entity.Genre
import com.example.bsbackend.domains.book.repository.BookRepository
import com.example.bsbackend.domains.bookstore.repository.BookstoreRepository
import com.example.bsbackend.domains.issue.model.entity.CoverType
import com.example.bsbackend.domains.issue.model.entity.Issue
import com.example.bsbackend.domains.issue.model.enum.BookType
import com.example.bsbackend.domains.issue.repository.IssueRepository
import com.example.bsbackend.domains.publishingHouse.model.PublishingHouse
import com.example.bsbackend.domains.publishingHouse.repository.PublishingHouseRepository
import com.example.bsbackend.domains.rating.repository.RatingRepository
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
    val authorRepository: AuthorRepository,
    val bookRepository: BookRepository,
    val ratingRepository: RatingRepository,
    val issueRepository: IssueRepository,
    val assortmentRepository: AssortmentRepository,
    val publishingHouseRepository: PublishingHouseRepository,
    val passwordEncoder: PasswordEncoder
) {
    @EventListener(ApplicationReadyEvent::class)
    fun addAdminsToDb() {

        bookstoreRepository.findAll()
            .forEach {
                Role.values().forEach { role ->
                    userRepository.save(
                        User(
                            username = "${role.name.lowercase(Locale.getDefault())}${it.address}",
                            password = "admin",
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


        //TODO: Move to data.sql
        val author = Author(
            firstName = "Miguel",
            lastName = "de Cervantes",
            country = "Hiszpania",
            books = mutableListOf()
        )
        authorRepository.save(author)
        val book = Book(
            title = "Don Kichot",
            description = "Miguel de Cervantes Saavedra swoim „Don Kichotem” położył podwaliny pod nowoczesną powieść. Przygody oszalałego od czytania książek szlachcica i jego giermka od z górą czterystu lat bawią i wzruszają kolejne pokolenia czytelników. Dzięki nowemu polskiemu przekładowi dzieło zostało odświeżone, więc współczesny miłośnik literatury będzie mógł cieszyć się tą historią jak nigdy przedtem. Wspaniały przekład wspaniałego dzieła. Okazuje się, że mimo swego sędziwego wieku „Don Kichot” to książka interesująca, wciągająca i pouczająca, a przede wszystkim śmieszna, jak informuje sam autor na kartach swojej powieści. Do tej pory trudno było tę śmieszność dostrzec. Dopiero teraz w pełni możemy docenić humor i doskonałe pióro wielkiego Hiszpana.",
            genre = Genre.ADVENTURE,
            originalPublicationYear = 1605,
            authors = listOf(author)
        )
        bookRepository.save(book)
        val authorFromDb = authorRepository.getById(author.authorId)
        authorFromDb.books = mutableListOf(book)
        authorRepository.save(authorFromDb)


        val publishingHouse = PublishingHouse(
            name = "Mag",
            foundationYear = 1995
        )
        publishingHouseRepository.save(publishingHouse)

        val issue = Issue(
            language = "Polski",
            publicationYear = 2004,
            numberOfPages = 1044,
            coverType = CoverType.HARDCOVER,
            bookType = BookType.BOOK,
            price = 74.99f,
            imageUrl = "https://s.lubimyczytac.pl/upload/books/221000/221953/564966-352x500.jpg",
            backgroundUrl = "https://ocdn.eu/pulscms-transforms/1/_jKktkuTURBXy9mNDYwNGU5MS0zYjNmLTQ4Y2QtYmU0Ny1mMzZkNDhjNDc4Y2YuanBlZ5GTBc0EsM0CpA",
            publishingHouse = publishingHouse,
            book = book
        )
        issueRepository.save(issue)
    }
}