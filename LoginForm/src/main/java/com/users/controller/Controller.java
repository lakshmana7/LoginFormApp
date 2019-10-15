package com.users.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.users.model.Student;
import com.users.repository.StudentRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
public class Controller {
	
	
	@Autowired
	private StudentRepository studentRepository;
	
	@PostMapping("save-student")
	public boolean saveStudent(@RequestBody Student student) {
		studentRepository.save(student);
		 return true;
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<Student> doLogin(@RequestBody Student student) {
		Student std = studentRepository.authenticate(student.getUsername(), student.getPassword());
		
		if(null != std) {
			return new ResponseEntity<Student>(std, HttpStatus.OK);
		} 
		return	new ResponseEntity<Student>(HttpStatus.BAD_REQUEST);
	}
	
	 @GetMapping("students-list") public List<Student> allstudents() { 
		 
		 return studentRepository.findAll();
		 }
	
	 @DeleteMapping("delete-student/{student_id}") 
	 public boolean deleteStudent(@PathVariable("student_id") Long student_id,Student student) {
	 student.setStudent_id(student_id); 
	 studentRepository.delete(student);
	 return true;
	 }
	 
	 @GetMapping("student/{student_id}") 
	 public Optional<Student> allstudentByID(@PathVariable("student_id") Long student_id,Student student) {
	 student.setStudent_id(student_id); 
	 return studentRepository.findById(student_id);
	  }
	
	 @PostMapping("update-student/{student_id}") 
	 public boolean updateStudent(@RequestBody Student student,@PathVariable("student_id") Long student_id) { 
		 student.setStudent_id(student_id); 
		 studentRepository.save(student);
		 return true;
	 }
}
