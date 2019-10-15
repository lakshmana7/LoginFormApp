import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '',
  redirectTo: 'login-student',
   pathMatch: 'full'
   },
  { path: 'view-student', component: StudentListComponent , canActivate: [AuthGuard] },
  { path: 'add-student', component: AddStudentComponent },
  {path: 'login-student', component: LoginComponent},
  {path: 'logout-student', component: LogoutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
