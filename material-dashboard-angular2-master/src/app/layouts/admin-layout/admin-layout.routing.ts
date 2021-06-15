import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {QuestionComponent} from 'app/icons/question/question.component'
import { AnsTableComponent } from 'app/icons/question/ans-table/ans-table.component';
import { SubAnsComponent } from 'app/icons/question/sub-ans/sub-ans.component';
import { QuAnsComponent } from 'app/icons/question/qu-ans/qu-ans.component';
import { QuesEditComponent } from 'app/icons/question/ques-edit/ques-edit.component';
export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'question',       component: QuestionComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {path:'quesEdit', component: QuesEditComponent},
    
    {path:'Answers', component: QuAnsComponent},
    {path:'subCat', component: SubAnsComponent},
    {path:'AnsLink', component: AnsTableComponent},

];
