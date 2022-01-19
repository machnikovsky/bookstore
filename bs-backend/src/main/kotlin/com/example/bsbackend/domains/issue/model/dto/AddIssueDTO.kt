package com.example.bsbackend.domains.issue.model.dto

import com.google.gson.annotations.SerializedName

data class AddIssueDTO(
    @SerializedName("title") var title: String = "",
    @SerializedName("authorFirstName") var authorFirstName: String = "",
    @SerializedName("authorLastName") var authorLastName: String = "",
    @SerializedName("authorCountry") var authorCountry: String = "",
    @SerializedName("description") var description: String = "",
    @SerializedName("genre") var genre: String = "",
    @SerializedName("originalPublicationYear") var originalPublicationYear: Int = 0,
    @SerializedName("language") var language: String = "",
    @SerializedName("publicationYear") var publicationYear: Int = 0,
    @SerializedName("numberOfPages") var numberOfPages: Int? = 0,
    @SerializedName("number") var number: Int? = 0,
    @SerializedName("coverType") var coverType: String? = "",
    @SerializedName("bookType") var bookType: String = "",
    @SerializedName("price") var price: Float = 0f,
    @SerializedName("imageUrl") var imageUrl: String = "",
    @SerializedName("backgroundUrl") var backgroundUrl: String = "",
    @SerializedName("publishingHouse") var publishingHouse: String = "",
)

