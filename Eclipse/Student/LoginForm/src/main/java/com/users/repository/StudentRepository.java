package com.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.users.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

	public Student authenticate(String username, String password);
}
