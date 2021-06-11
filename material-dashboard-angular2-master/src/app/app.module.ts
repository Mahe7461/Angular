
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from'@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { QuestionComponent} from './icons/question/question.component';
import {AddEditAnsTableComponent} from './icons/question/add-edit-ans-table/add-edit-ans-table.component';
import {AddQuestComponent} from './icons/question/add-quest/add-quest.component';
import {AnsEditComponent} from './icons/question/ans-edit/ans-edit.component';
import {AnsTableComponent} from './icons/question/ans-table/ans-table.component';
import {QuAnsComponent} from './icons/question/qu-ans/qu-ans.component';
import {QuesEditComponent} from './icons/question/ques-edit/ques-edit.component'; 

import {SubAnsComponent} from './icons/question/sub-ans/sub-ans.component';
import {SubAnsEditComponent} from './icons/question/sub-ans-edit/sub-ans-edit.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {SharedService} from './shared.service';
import {DemoMaterialModule} from './demo-material-module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {ToastrModule} from 'ngx-toastr';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule, 
    ToastrModule.forRoot(),
    DemoMaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    QuestionComponent,
    AddEditAnsTableComponent,
    AddQuestComponent,
    AnsEditComponent,
    AnsTableComponent,
    QuAnsComponent,
    QuesEditComponent,
    SubAnsComponent,
    SubAnsEditComponent,
    ConfirmDialogComponent,


  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
                                