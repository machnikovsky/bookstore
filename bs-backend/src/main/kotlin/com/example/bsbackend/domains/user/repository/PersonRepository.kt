package com.example.bsbackend.domains.user.repository

import com.example.bsbackend.domains.user.model.entity.Person
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface PersonRepository: JpaRepository<Person, Int> {
    fun findByPersonId(id: Int): Person?
    @Transactional
    @Modifying
    fun removePersonByPersonId(id: Int)
}