import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {QuestionComponent} from 'app/question/question.component'
import { AnsTableComponent } from 'app/question/ans-table/ans-table.component';
import { SubAnsComponent } from 'app/question/sub-ans/sub-ans.component';
import { QuAnsComponent } from 'app/question/qu-ans/qu-ans.component';
import { QuesEditComponent } from 'app/question/ques-edit/ques-edit.component';
export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'question',       component: QuestionComponent },
    { path: 'notifications',  component: NotificationsComponent },
    {path:'quesEdit', component: QuesEditComponent},
    {path:'Answers', component: QuAnsComponent},
    {path:'subCat', component: SubAnsComponent},
    {path:'AnsLink', component: AnsTableComponent},

];
