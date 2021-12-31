package com.example.bsbackend.security

import com.example.bsbackend.domains.user.repository.UserRepository
import org.springframework.context.annotation.Bean
import org.springframework.security.authentication.AuthenticationProvider
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder

@EnableWebSecurity
class WebSecurityConfiguration(private val userRepository: UserRepository): WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/book/**", "/user/register").permitAll()
            .antMatchers("/user/admin").hasRole("ADMIN")
            .antMatchers("/user/worker").hasRole("WORKER")
            .anyRequest().authenticated()
            .and()
            .httpBasic();
    }

    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.authenticationProvider(authenticationProvider())
    }

    @Bean
    fun authenticationProvider(): AuthenticationProvider {
        val provider: DaoAuthenticationProvider = DaoAuthenticationProvider()
        val detailsService: BookstoreUserDetailsService = BookstoreUserDetailsService(userRepository)
        provider.setUserDetailsService(detailsService)
        provider.setPasswordEncoder(passwordEncoder())
        return provider
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }
}