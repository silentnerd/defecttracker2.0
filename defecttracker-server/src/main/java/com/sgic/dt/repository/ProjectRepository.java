
package com.sgic.dt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sgic.dt.model.Project;

@Repository
	public interface ProjectRepository extends JpaRepository<Project, Long>{
	@Query(value = "SELECT next_val as nextid FROM defecttracker.project_seq LIMIT 1", nativeQuery = 
	        true)
	 Long getNextSeriesPid();
	
	@Modifying
	@Query(value = "update Project p set p.name = ? where p.id = ?", 
	  nativeQuery = true)
	int updateProject(String name, Long id);
	
	
	Boolean existsByName(String projectname);
	
	Boolean existsByAbbreviation(String abbreviation);
	
	}



	
