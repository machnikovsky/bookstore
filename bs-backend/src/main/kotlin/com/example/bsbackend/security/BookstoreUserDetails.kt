package com.example.bsbackend.security

import com.example.bsbackend.domains.user.model.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails


class BookstoreUserDetails(val user: User): UserDetails {

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> =
        user.roles
            .map { SimpleGrantedAuthority(it.roleName) }
            .toMutableSet()

    override fun getPassword(): String = user.password
    override fun getUsername(): String = user.username
    override fun isAccountNonExpired(): Boolean = true
    override fun isAccountNonLocked(): Boolean = true
    override fun isCredentialsNonExpired(): Boolean = true
    override fun isEnabled(): Boolean = true
}