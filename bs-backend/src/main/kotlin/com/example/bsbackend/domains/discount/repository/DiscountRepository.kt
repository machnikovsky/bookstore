package com.example.bsbackend.domains.discount.repository

import com.example.bsbackend.domains.discount.model.Discount
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface DiscountRepository : JpaRepository<Discount, Int>
