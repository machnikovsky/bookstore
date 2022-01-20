package com.example.bsbackend.domains.user.model.dto

import com.google.gson.annotations.SerializedName

data class UserUpdateInfoDto(
    @SerializedName("firstName") var firstName: String?,
    @SerializedName("lastName") var lastName: String?,
    @SerializedName("email") var email: String?,
    @SerializedName("password") var password: String?,
)