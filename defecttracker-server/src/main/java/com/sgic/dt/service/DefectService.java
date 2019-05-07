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

import com.sgic.dt.exception.ProjectNotFoundException;
import com.sgic.dt.model.Defect;
import com.sgic.dt.repository.DefectRepository;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class DefectService {

	@Autowired
	private DefectRepository defectRepository;
	
	@GetMapping("/defects")
	public List<Defect> retrieveAllDefects() {
		return defectRepository.findAll();
	}
	
	@GetMapping("/defects/{id}")
	public Defect retrieveDefect(@PathVariable long id) {
		Optional<Defect> defect = defectRepository.findById(id);

		if (!defect.isPresent())
			throw new ProjectNotFoundException("id-" + id);

		return defect.get();
	}
	
	@GetMapping("/countdefects")
	public long countAllDefects() {
		return defectRepository.getNextSeriesId();
	}

	@DeleteMapping("/defects/{id}")
	public void deleteDefect(@PathVariable long id) {
		defectRepository.deleteById(id);
	}

	
	@PostMapping("/defect")
	public ResponseEntity<Object> createDefect(@RequestBody Defect defect) {
		Defect savedDefect = defectRepository.save(defect);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(savedDefect.getId()).toUri();

		return ResponseEntity.created(location).build();

	}
	
	@PutMapping("/defect/{id}")
	public ResponseEntity<Object> updateDefect(@RequestBody Defect defect, @PathVariable long id) {

		Optional<Defect> defectOptional = defectRepository.findById(id);

		if (!defectOptional.isPresent())
			return ResponseEntity.notFound().build();

		defect.setId(id);
		
		defectRepository.save(defect);

		return ResponseEntity.noContent().build();
	}
}