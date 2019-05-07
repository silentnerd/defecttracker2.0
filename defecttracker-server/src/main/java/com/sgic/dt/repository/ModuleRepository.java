// * Copyright (C) 2019 DefectTracker - All Rights Reserved_
package com.sgic.dt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sgic.dt.model.Defect;
import com.sgic.dt.model.Module;

@Repository
	public interface ModuleRepository extends JpaRepository<Module, Long>{
	@Query(value = "SELECT count(*) FROM Module m WHERE m.project_id= ?", nativeQuery = 
	        true)
	 int countModuleBasedOnProject(Long projectid);
	}

