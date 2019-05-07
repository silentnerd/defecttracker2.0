// * Copyright (C) 2019 DefectTracker - All Rights Reserved_
package com.sgic.dt.model;

import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

	@Entity
	@Table(name="user")
	public class User {
			@Id
			@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id_seq")
			@SequenceGenerator(
				      name = "user_id_seq", 
				      sequenceName = "user_id_seq", 
				      allocationSize = 10
				  )
			private Long id;
			
			private String fname;
			
			private String lname;
			
			private String usertype;
			
			@ManyToMany(mappedBy = "allocatedModule")
			List<Module> allocatedModule;
			
			public User(){}

			public User(String fname, String lname, String usertype) {
				this.id = id;
				this.fname = fname;
				this.lname = lname;
				this.usertype = usertype;
			}

			public Long getId() {
				return id;
			}

			public void setId(Long id) {
				this.id = id;
			}

			public String getFname() {
				return fname;
			}

			public void setFname(String fname) {
				this.fname = fname;
			}

			public String getLname() {
				return lname;
			}

			public void setLname(String lname) {
				this.lname = lname;
			}

			public String getUsertype() {
				return usertype;
			}

			public void setUsertype(String usertype) {
				this.usertype = usertype;
			}
			

			
			
			
}
