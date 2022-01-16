package com.example.bsbackend.domains.user.model

import com.google.gson.annotations.SerializedName

data class UserRegistrationDto(
    @SerializedName("username") var username: String,
    @SerializedName("email") var email: String,
    @SerializedName("password") var password: String,
    @SerializedName("firstName") var firstName: String,
    @SerializedName("lastName") var lastName: String,
    @SerializedName("phoneNumber") var phoneNumber: String = "",
    @SerializedName("gender") var gender: String
)