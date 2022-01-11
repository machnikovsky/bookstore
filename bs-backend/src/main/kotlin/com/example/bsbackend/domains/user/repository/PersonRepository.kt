package com.example.bsbackend.domains.user.repository

import com.example.bsbackend.domains.user.model.Person
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PersonRepository: JpaRepository<Person, Int> {
    fun findByPersonId(id: Int): Person?
}