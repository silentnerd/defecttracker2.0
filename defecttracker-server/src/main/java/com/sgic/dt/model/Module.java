// * Copyright (C) 2019 DefectTracker - All Rights Reserved_
package com.sgic.dt.model;

import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

	@Entity
	@Table(name="module")
	public class Module {
			@Id
			@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "module_id_seq")
			@SequenceGenerator(
				      name = "module_id_seq", 
				      sequenceName = "module_id_seq", 
				      allocationSize = 10
				  )
			private Long id;
			
			private String name;
			
			private Long module_id;
			
			private Long project_id;
			
			

			public Long getId() {
				return id;
			}

			public void setId(Long id) {
				this.id = id;
			}

			public String getName() {
				return name;
			}

			public void setName(String name) {
				this.name = name;
			}

			public Long getModule_id() {
				return module_id;
			}

			public void setModule_id(Long module_id) {
				this.module_id = module_id;
			}

			public Long getProject_id() {
				return project_id;
			}

			public void setProject_id(Long project_id) {
				this.project_id = project_id;
			}

			
			
}
