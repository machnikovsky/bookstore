package com.example.bsbackend.domains.user.model

import com.google.gson.annotations.SerializedName

data class UserInfoDto(
    @SerializedName("username") var username: String = "",
    @SerializedName("email") var email: String = "",
    @SerializedName("firstName") var firstName: String = "",
    @SerializedName("lastName") var lastName: String = "",
    @SerializedName("creationDate") var creationDate: String = "",
    @SerializedName("roles") var roles: MutableSet<Role> = mutableSetOf()
)
