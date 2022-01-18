package com.example.bsbackend.domains.cart.model.dto

import com.google.gson.annotations.SerializedName

data class CartDTO (
    @SerializedName("cart_items") var cartItems: List<IssueCartDTO> = mutableListOf(),
    @SerializedName("total_price") var totalPrice: Float = 0f,
)

fun List<IssueCartDTO>.toCart(): CartDTO =
    CartDTO(
        this,
        this
            .takeIf { it.isNotEmpty() }
            ?.map { it.totalPrice }
            ?.reduce { sum, element -> sum + element }
            ?.let { "%.2f".format(it).replace(",", ".").toFloatOrNull()?:0f }
            ?: 0f
    )