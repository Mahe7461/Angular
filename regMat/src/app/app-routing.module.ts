import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from 'src/app/employee/employee.component';

import {RegistrationComponent} from 'src/app/registration/registration.component';
import {LoginpageComponent} from 'src/app/loginpage/loginpage.component';
import {ForgetPasswordComponent} from 'src/app/forget-password/forget-password.component';
import {LoginComponent} from 'src/app/login/login.component';
import {AdminComponent} from 'src/app/adminpage/admin/admin.component';
import { AuthguardService } from './authguard.service';
import { AdminpageComponent } from './adminpage/adminpage.component';
import {ResetPasswordComponent} from 'src/app/reset-password/reset-password.component';


const routes: Routes = [


{path:'registration', component:RegistrationComponent},
{path:'loginpage', component:LoginpageComponent},
{path:'forget', component:ForgetPasswordComponent},
{path:'login', component: LoginComponent},
{path:'employee', component: EmployeeComponent},
{path:'resetpassword', component: ResetPasswordComponent },
{path:'admin', component: AdminComponent, canActivate:[AdminpageComponent]},
{path:'adminpage' , component: AdminpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
