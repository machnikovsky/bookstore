package com.example.bsbackend.domains.user.model

import com.google.gson.annotations.SerializedName

data class UserRegistrationDto(
    @SerializedName("username") var username: String,
    @SerializedName("email") var email: String,
    @SerializedName("password") var password: String,
    @SerializedName("first_name") var firstName: String,
    @SerializedName("last_name") var lastName: String,
    @SerializedName("phone_number") var phoneNumber: String,
    @SerializedName("gender") var gender: Gender
)