package com.example.bsbackend.domains.assortment.repository

import com.example.bsbackend.domains.assortment.model.Assortment
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface AssortmentRepository : JpaRepository<Assortment, Int>


