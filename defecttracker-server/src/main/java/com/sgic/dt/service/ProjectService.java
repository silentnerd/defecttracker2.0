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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sgic.dt.exception.ProjectNotFoundException;
import com.sgic.dt.model.Project;
import com.sgic.dt.payload.ProjectIdentityAvailability;
import com.sgic.dt.repository.ProjectRepository;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;
	
	@GetMapping("/projects")
	public List<Project> retrieveAllProjects() {
		return projectRepository.findAll();
	}
	
	@GetMapping("/projects/{pid}")
	public Project retrieveProject(@PathVariable long pid) {
		Optional<Project> project = projectRepository.findById(pid);

		if (!project.isPresent())
			throw new ProjectNotFoundException("pid-" + pid);

		return project.get();
	}
	
	@GetMapping("/nextprojectid")
	public long getNextProjectId() {
		return projectRepository.getNextSeriesPid();
	}
	
	@GetMapping("/countprojects")
	public long countAllProjects() {
		return projectRepository.count();
	}

	@DeleteMapping("/projects/{id}")
	public void deleteProject(@PathVariable long id) {
		projectRepository.deleteById(id);
	}

	
	@PostMapping("/project")
	public ResponseEntity<Object> createProject(@RequestBody Project project) {
		Project savedProject = projectRepository.save(project);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{pid}")
				.buildAndExpand(savedProject.getId()).toUri();

		return ResponseEntity.created(location).build();

	}
	
	@GetMapping("/project/checkProjectnameAvailability")
    public ProjectIdentityAvailability checkProjectNameAvailability(@RequestParam(value = "projectname") String projectname) {
        Boolean isAvailable = !projectRepository.existsByName(projectname);
        return new ProjectIdentityAvailability(isAvailable);
    }
	
	@GetMapping("/project/checkAbbreviationAvailability")
    public ProjectIdentityAvailability checkAbbreviationAvailability(@RequestParam(value = "abbreviation") String abbreviation) {
        Boolean isAvailable = !projectRepository.existsByAbbreviation(abbreviation);
        return new ProjectIdentityAvailability(isAvailable);
    }
	
	@PostMapping("/update/projects/{id}")
	public ResponseEntity<Object> updateProject(@RequestBody Project project, @PathVariable long id) {

		Optional<Project> projectOptional = projectRepository.findById(id);

		if (!projectOptional.isPresent())
			return ResponseEntity.notFound().build();

		project.setId(id);
		
		projectRepository.save(project);

		return ResponseEntity.noContent().build();
	}
}