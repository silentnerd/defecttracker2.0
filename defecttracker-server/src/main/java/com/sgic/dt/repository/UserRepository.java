// * Copyright (C) 2019 DefectTracker - All Rights Reserved_
package com.sgic.dt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sgic.dt.model.Defect;
import com.sgic.dt.model.Module;
import com.sgic.dt.model.User;

@Repository
	public interface UserRepository extends JpaRepository<User, Long>{
	@Query(value = "SELECT * FROM User u WHERE u.usertype = ?", nativeQuery = 
	        true)
	 List<User> getbasedonusertype(String usertype);
	
	}

