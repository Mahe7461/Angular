import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminpageComponent } from 'src/app/adminpage/adminpage.component';
import {AdminComponent} from 'src/app/adminpage/admin/admin.component';
import {CreateadminComponent} from 'src/app/adminpage/createadmin/createadmin.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { RouteguardGuard } from './routeguard.guard';
import { CreateguardGuard} from './createguard.guard';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
const routes: Routes = [
  {path:'adminpage', component:AdminpageComponent},
  {path:'admin', component:AdminComponent, canActivate:[RouteguardGuard]},
  {path:'createadmin', component: CreateadminComponent, canActivate:[CreateguardGuard]},
  {path:'', component:HomeComponent},
  {path:'user', component:UserComponent},
];

@NgModule({   
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
