import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from'@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* service */
import {SharedService} from 'src/app/shared.service'
/*components*/
import { AppComponent } from './app.component';
import{EmployeeComponent} from 'src/app/employee/employee.component'
import {AddEditEmpComponent} from 'src/app/employee/add-edit-emp/add-edit-emp.component';
import { ShowEmpComponent} from 'src/app/employee/show-emp/show-emp.component';

import { RegistrationComponent } from './registration/registration.component';
/*material*/
import {MatButtonModule} from '@angular/material/button';
import{MatTabsModule}from '@angular/material/tabs';
import{MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';
import { MatDrawerContainer, MatDrawerContent, MatSidenavModule} from  '@angular/material/sidenav';
import { MatCheckboxModule} from  '@angular/material/checkbox';
import { MatRadioModule} from  '@angular/material/radio';
import { MatFormFieldModule} from  '@angular/material/form-field';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


import { AdminpageComponent } from './adminpage/adminpage.component';

import { AdminComponent } from './adminpage/admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEditEmpComponent,
    ShowEmpComponent,
    
    RegistrationComponent,
    LoginpageComponent,
    ForgetPasswordComponent,
    LoginComponent,
    ResetPasswordComponent,
    

    AdminpageComponent,
   
    AdminComponent,
   
    AccessDeniedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    //MatDrawerContainer,
    //MatDrawerContent,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
