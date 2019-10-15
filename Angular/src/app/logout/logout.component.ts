import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    private studentservice: StudentService
    ) { }

  ngOnInit() {
  }
   logoutpage(){
this.studentservice.logout()
          this.router.navigate(['/login-studentt']);
   }
}
