// * Copyright (C) 2019 DefectTracker - All Rights Reserved_
package com.sgic.dt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sgic.dt.model.Defect;

@Repository
	public interface DefectRepository extends JpaRepository<Defect, Long>{
	@Query(value = "SELECT * FROM defec.hibernate_sequence LIMIT 1", nativeQuery = 
	        true)
	 Long getNextSeriesId();
	}

