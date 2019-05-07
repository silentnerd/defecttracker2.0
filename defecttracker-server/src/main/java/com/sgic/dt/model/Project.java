// * Copyright (C) 2019 DefectTracker - All Rights Reserved_
package com.sgic.dt.model;

import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "project", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
            "name"
        }),
        @UniqueConstraint(columnNames = {
            "abbreviation"
        })
})
public class Project {
		@Id
		@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "project_id_seq")
		@SequenceGenerator(
			      name = "project_id_seq", 
			      sequenceName = "project_id_seq", 
			      allocationSize = 10
			  )
		private Long id;
		
		@NotBlank
		@Size(max = 45)
		@Column(name = "name")
		private String name;
		
		@NotBlank
		@Size(max = 10)
		@Column(name = "abbreviation")
		private String abbreviation;
		
		
		
		public Project() {
			
		}


	public Project(Long id, String name, String abbreviation) {
			
			this.id = id;
			this.name = name;
			this.abbreviation =abbreviation;
			
		}
	
	public Project( String name) {
		
		this.name = name;
		
	}

		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
		}


		public Long getId() {
			return id;
		}


		public void setId(Long id) {
			this.id = id;
		}


		public String getAbbreviation() {
			return abbreviation;
		}


		public void setAbbreviation(String abbreviation) {
			this.abbreviation = abbreviation;
		}	
		
		
		
}
