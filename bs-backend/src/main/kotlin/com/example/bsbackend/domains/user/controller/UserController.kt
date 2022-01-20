package com.example.bsbackend.domains.user.controller

import com.example.bsbackend.domains.user.model.entity.User
import com.example.bsbackend.domains.user.model.dto.UserUpdateInfoDto
import com.example.bsbackend.domains.user.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = ["http://localhost:3000"])
class UserController(val userService: UserService) {

    @GetMapping("/all")
    fun getAllUsers(): ResponseEntity<List<User>> = ResponseEntity.ok(userService.getAllUsers())

    @GetMapping("/admin")
    fun getAdminPanel(): ResponseEntity<String> = ResponseEntity.ok("This is an admin panel.")

    @GetMapping("/worker")
    fun getWorkerPanel(): ResponseEntity<String> = ResponseEntity.ok("This is a worker panel.")

    @GetMapping("/info/{username}")
    fun getUserInfo(@PathVariable("username") username: String): ResponseEntity<Any> =
        userService.getUserInfo(username)

    @PutMapping("/update")
    fun updateUserInfo(@RequestBody userUpdateInfoDto: UserUpdateInfoDto): ResponseEntity<Any> =
        userService.updateUserInfo(userUpdateInfoDto)

    @DeleteMapping("/delete")
    fun removeAccount(): ResponseEntity<Any> =
        userService.removeAccount()

    @PutMapping("/{username}/promote")
    fun promoteUser(@PathVariable("username") username: String): ResponseEntity<Any> =
        userService.promoteUser(username)

    @GetMapping("/find/{query}")
    fun findUsersByQuery(@PathVariable("query") query: String): ResponseEntity<Any> =
        userService.findUsersByQuery(query)

    @GetMapping("/stats")
    fun getUserStats(): ResponseEntity<Any> =
        userService.getUserStats()

}