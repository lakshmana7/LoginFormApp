import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn$: Observable<boolean>;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.studentService.isLoggedIn;
  }

    logout() {
    this.studentService.logout();
    if (false) {
    this.router.navigate(['/login']);
    }
  }
}
