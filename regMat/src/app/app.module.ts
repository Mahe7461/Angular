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
import { NewComponent } from './new/new.component';
import { RegistrationComponent } from './registration/registration.component';
/*material*/
import {MatButtonModule} from '@angular/material/button';
import{MatTabsModule}from '@angular/material/tabs';
import{MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';
import { MatSidenavModule} from  '@angular/material/sidenav';
import { MatCheckboxModule} from  '@angular/material/checkbox';
import { MatRadioModule} from  '@angular/material/radio';
import { MatFormFieldModule} from  '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEditEmpComponent,
    ShowEmpComponent,
    NewComponent,
    RegistrationComponent,
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
