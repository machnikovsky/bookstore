package com.example.bsbackend.domains.user.controller

import com.example.bsbackend.domains.user.model.User
import com.example.bsbackend.domains.user.model.UserRegistrationDto
import com.example.bsbackend.domains.user.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.sql.DriverManager.println

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = ["http://localhost:3000"])
class UserController(val userService: UserService) {

    @GetMapping("/all")
    fun getAllUsers(): ResponseEntity<List<User>> = ResponseEntity.ok(userService.getAllUsers())

    @PostMapping("/register")
    fun registerUser(@RequestBody userRegistrationDto: UserRegistrationDto): ResponseEntity<User> {
        println(userRegistrationDto.toString())
        return ResponseEntity.ok(userService.registerUser(userRegistrationDto))
    }

    @GetMapping("/admin")
    fun getAdminPanel(): ResponseEntity<String> = ResponseEntity.ok("This is an admin panel.")

    @GetMapping("/worker")
    fun getWorkerPanel(): ResponseEntity<String> = ResponseEntity.ok("This is a worker panel.")

    @GetMapping("/info/{username}")
    fun getUserInfo(@PathVariable("username") username: String): ResponseEntity<Any> =
        userService.getUserInfo(username)
}