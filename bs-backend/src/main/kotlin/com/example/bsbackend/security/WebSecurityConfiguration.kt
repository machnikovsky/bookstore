package com.example.bsbackend.security

import com.example.bsbackend.domains.user.repository.UserRepository
import com.example.bsbackend.security.jwt.JwtAuthenticationEntryPoint
import com.example.bsbackend.security.jwt.JwtRequestFilter
import org.springframework.context.annotation.Bean
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.AuthenticationProvider
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

@EnableWebSecurity
class WebSecurityConfiguration(
    private val userRepository: UserRepository,
    private val jwtRequestFilter: JwtRequestFilter,
    private val unauthorizedHandler: JwtAuthenticationEntryPoint
    ): WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http
            .cors().and()
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/book/**", "/issue/**", "/user/register", "/auth/**").permitAll()
            .antMatchers("/rating/**", "/cart", "/cart/**").permitAll()
            .antMatchers("/user/info/**", "/rating/add").hasAnyRole("USER", "WORKER", "ADMIN")
            .antMatchers("/user/admin").hasRole("ADMIN")
            .antMatchers("/user/worker").hasRole("WORKER")
            .anyRequest().authenticated()
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter::class.java)
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

    @Bean
    override fun authenticationManagerBean(): AuthenticationManager {
        return super.authenticationManagerBean()
    }


}