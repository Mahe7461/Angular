import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminComponent } from './adminpage/admin/admin.component';
import { CreateadminComponent } from './adminpage/createadmin/createadmin.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import{MatTabsModule}from '@angular/material/tabs';
import{MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';
import { MatDrawerContainer, MatDrawerContent, MatSidenavModule} from  '@angular/material/sidenav';
import { MatCheckboxModule} from  '@angular/material/checkbox';
import { MatRadioModule} from  '@angular/material/radio';
import { MatFormFieldModule} from  '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent,
    AdminComponent,
    CreateadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
