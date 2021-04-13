import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';

const routes: Routes = [
  { path : '',component: AppComponent, children:[{ path:'',component:LoginCompComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
