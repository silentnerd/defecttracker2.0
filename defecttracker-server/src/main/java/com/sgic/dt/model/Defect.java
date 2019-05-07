// * Copyright (C) 2019 DefectTracker - All Rights Reserved_
package com.sgic.dt.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="defect")
public class Defect {
		@Id
		@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "defect_id_seq")
		@SequenceGenerator(
			      name = "defect_id_seq", 
			      sequenceName = "defect_id_seq", 
			      allocationSize = 10
			  )
		private Long id;
		private String module;
		private String description;
		private String stepstocreate;
		private String severity;
		private String priority;
		private String defecttype;
		private String enteredby;
		private String entereddate;
		private String status;
		private String assignedto;
		private String fixedby;
		private String fixeddate;
		private String availablein;
		private String comments;
		
		
		
		public Defect() {
			super();
		}


	public Defect(Long id, String module, String description, String stepstocreate, String severity, 
			String priority, String defecttype, String enteredby, String entereddate, 
			String status, String assignedto, String fixedby, String fixeddate, String availablein, 
			String comments) {
			super();
			this.id = id;
			this.module = module;
			this.description = description;
			this.stepstocreate = stepstocreate;
			this.severity = severity;
			this.priority = priority;
			this.defecttype = defecttype;
			this.enteredby = enteredby;
			this.entereddate = entereddate;
			this.status = status;
			this.assignedto = assignedto;
			this.fixedby = fixedby;
			this.fixeddate = fixeddate;
			this.availablein = availablein;
			this.comments = comments;
		}


		
		public Long getId() {
			return id;
		}



		public void setId(Long id) {
			this.id = id;
		}



		public String getModule() {
			return module;
		}



		public void setModule(String module) {
			this.module = module;
		}



		public String getDescription() {
			return description;
		}



		public void setDescription(String description) {
			this.description = description;
		}



		public String getStepstocreate() {
			return stepstocreate;
		}



		public void setStepstocreate(String stepstocreate) {
			this.stepstocreate = stepstocreate;
		}



		public String getSeverity() {
			return severity;
		}



		public void setSeverity(String severtity) {
			this.severity = severtity;
		}



		public String getPriority() {
			return priority;
		}



		public void setPriority(String priority) {
			this.priority = priority;
		}



		public String getDefecttype() {
			return defecttype;
		}



		public void setDefecttype(String defecttype) {
			this.defecttype = defecttype;
		}



		public String getEnteredby() {
			return enteredby;
		}



		public void setEnteredby(String enteredby) {
			this.enteredby = enteredby;
		}



		public String getEntereddate() {
			return entereddate;
		}



		public void setEntereddate(String entereddate) {
			this.entereddate = entereddate;
		}



		public String getStatus() {
			return status;
		}



		public void setStatus(String status) {
			this.status = status;
		}



		public String getAssignedto() {
			return assignedto;
		}



		public void setAssignedto(String assignedto) {
			this.assignedto = assignedto;
		}



		public String getFixedby() {
			return fixedby;
		}



		public void setFixedby(String fixedby) {
			this.fixedby = fixedby;
		}



		public String getFixeddate() {
			return fixeddate;
		}



		public void setFixeddate(String fixeddate) {
			this.fixeddate = fixeddate;
		}



		public String getAvailablein() {
			return availablein;
		}



		public void setAvailablein(String availablein) {
			this.availablein = availablein;
		}



		public String getComments() {
			return comments;
		}



		public void setComments(String comments) {
			this.comments = comments;
		}

	
	
		
		
		
}
