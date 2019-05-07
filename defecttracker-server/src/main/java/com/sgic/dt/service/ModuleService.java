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
import com.sgic.dt.repository.ModuleRepository;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ModuleService {

	@Autowired
	private ModuleRepository moduleRepository;
	
	@GetMapping("/modules")
	public List<Module> retrieveAllModule() {
		return moduleRepository.findAll();
	}
	
	@GetMapping("/modules/{id}")
	public Module retrieveModule(@PathVariable long id) {
		Optional<Module> module = moduleRepository.findById(id);

		if (!module.isPresent())
			throw new ModuleNotFoundException("id-" + id);

		return module.get();
	}
	
	@GetMapping("/countmodulebasedonproject/{projectid}")
	public int countModuleBasedOnProject(@PathVariable long projectid) {
		return moduleRepository.countModuleBasedOnProject(projectid);
	}
	

	@DeleteMapping("/modules/{id}")
	public void deleteModule(@PathVariable long id) {
		moduleRepository.deleteById(id);
	}

	
	@PostMapping("/module")
	public ResponseEntity<Object> createModule(@RequestBody Module module) {
		Module savedModule = moduleRepository.save(module);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(savedModule.getId()).toUri();

		return ResponseEntity.created(location).build();

	}
	
	@PutMapping("/module/{id}")
	public ResponseEntity<Object> updateDefect(@RequestBody Module module, @PathVariable long id) {

		Optional<Module> moduleOptional = moduleRepository.findById(id);

		if (!moduleOptional.isPresent())
			return ResponseEntity.notFound().build();

		module.setId(id);
		
		moduleRepository.save(module);

		return ResponseEntity.noContent().build();
	}
}