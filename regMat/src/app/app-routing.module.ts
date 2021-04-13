import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from 'src/app/employee/employee.component';
import{NewComponent} from 'src/app/new/new.component';
import {RegistrationComponent} from 'src/app/registration/registration.component';
const routes: Routes = [
{path:'new', component:NewComponent},{path:'registration', component:RegistrationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
