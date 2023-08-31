import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { SignUpCompComponent } from './Components/Auth/sign-up-comp/sign-up-comp.component';
import { LoginCompComponent } from './Components/Auth/login-comp/login-comp.component';
import { DashboardComponent } from './AdminSide/dashboard/dashboard.component';


const routes: Routes = [
  {path:"",component:HomeComponentComponent},
  {path:"signup",component:SignUpCompComponent},
  {path:"login",component:LoginCompComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
