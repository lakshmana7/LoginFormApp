import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Observable, Subject } from 'rxjs';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

 constructor(private studentservice: StudentService) { }

  get StudentName(){
    return this.studentupdateform.get('student_name');
  }

  get StudentEmail(){
    return this.studentupdateform.get('student_email');
  }

  get StudentPhoneNumber(){
    return this.studentupdateform.get('student_phone_number');
  }

  get StudentPlace(){
    return this.studentupdateform.get('student_place');
  }
  get StudentId(){
    return this.studentupdateform.get('student_id');
  }

   get StudentUsername(){
    return this.studentupdateform.get('username');
  }
   get StudentPassword(){
    return this.studentupdateform.get('password');
  }

  studentsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  students: Observable<Student[]>;
  student : Student = new Student();
  deleteMessage = false;
  studentlist: any;
  isupdated = false;    

  studentupdateform = new FormGroup({
    student_id: new FormControl(),
    student_name: new FormControl(),
    student_email: new FormControl(),
    student_phone_number: new FormControl(),
    student_place: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  });
 

  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 5,
      stateSave: true,
      lengthMenu: [[5, 10, 20, -1], [5, 10, 20, "All"]],
      processing: true
    };   
    this.studentservice.getStudentList().subscribe(data => {
    this.students = data;
    this.dtTrigger.next();
    })
  }
  
  deleteStudent(id: number) {
    this.studentservice.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.studentservice.getStudentList().subscribe(data => {
            this.students = data
            })
        },
        error => console.log(error));
  }


  updateStudent(id: number){
    this.studentservice.getStudent(id)
      .subscribe(
        data => {
          this.studentlist = data
        },
        error => console.log(error));
  }

  updateStu(updstu){
    this.student = new Student();
    this.student.student_id = this.StudentId.value;
    this.student.student_name = this.StudentName.value;
    this.student.student_email = this.StudentEmail.value;
    this.student.student_phone_number = this.StudentPhoneNumber.value;
    this.student.student_place = this.StudentPlace.value;
    this.student.username = this.StudentUsername.value;
    this.student.password = this.StudentPassword.value;
    console.log(this.StudentEmail.value);

    this.studentservice.updateStudent(this.student.student_id, this.student).subscribe(
    data => {
      this.isupdated = true;
      this.studentservice.getStudentList().subscribe(data => {
        this.students = data
        })
    },
    error => console.log(error));
  }

  changeisUpdate(){
    this.isupdated = false;
  }
}
