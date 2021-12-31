package com.example.bsbackend.domains.user.model

enum class Role(val roleName: String) {
    USER("ROLE_USER"), WORKER("ROLE_WORKER"), ADMIN("ROLE_ADMIN")
}