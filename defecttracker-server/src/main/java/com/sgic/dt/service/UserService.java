// * Copyright (C) 2019 DefectTracker - All Rights Reserved_

package com.sgic.dt.service;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sgic.dt.exception.ModuleNotFoundException;
import com.sgic.dt.exception.ProjectNotFoundException;
import com.sgic.dt.model.Module;
import com.sgic.dt.model.User;
import com.sgic.dt.repository.ModuleRepository;
import com.sgic.dt.repository.UserRepository;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> retrieveAllUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping("/users/{id}")
	public User retrieveUser(@PathVariable long id) {
		Optional<User> user = userRepository.findById(id);

		if (!user.isPresent())
			throw new ModuleNotFoundException("id-" + id);

		return user.get();
	}
	
	@GetMapping("/users/type/{usertype}")
	public List<User> retrieveAllUsersBasedonUsertype(@PathVariable String usertype) {
		return userRepository.getbasedonusertype(usertype);
	}
	

	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable long id) {
		userRepository.deleteById(id);
	}

	
	@PostMapping("/user")
	public ResponseEntity<Object> createUser(@RequestBody User user) {
		User savedUser = userRepository.save(user);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(savedUser.getId()).toUri();

		return ResponseEntity.created(location).build();

	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<Object> updateUser(@RequestBody User user, @PathVariable long id) {

		Optional<User> userOptional = userRepository.findById(id);

		if (!userOptional.isPresent())
			return ResponseEntity.notFound().build();

		user.setId(id);
		
		userRepository.save(user);

		return ResponseEntity.noContent().build();
	}
}