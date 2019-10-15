package com.users.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "student")
@NamedQueries({
	@NamedQuery(name = "Student.authenticate", query = "select s from Student s where s.username=:username and s.password=:password")
})
public class Student {

	private Long student_id;
	private String student_name;
	private String student_email;
	private String student_phone_number;
	private String student_place;

	private String username;
	private String password;

	public String getStudent_name() {
		return student_name;
	}

	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}

	public String getStudent_email() {
		return student_email;
	}

	public void setStudent_email(String student_email) {
		this.student_email = student_email;
	}

	public String getStudent_phone_number() {
		return student_phone_number;
	}

	public void setStudent_phone_number(String student_phone_number) {
		this.student_phone_number = student_phone_number;
	}

	public String getStudent_place() {
		return student_place;
	}

	public void setStudent_place(String student_place) {
		this.student_place = student_place;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getStudent_id() {
		return student_id;
	}

	public void setStudent_id(Long student_id) {
		this.student_id = student_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
