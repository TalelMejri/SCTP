import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { SignUpCompComponent } from './Components/Auth/sign-up-comp/sign-up-comp.component';
import { LoginCompComponent } from './Components/Auth/login-comp/login-comp.component';



const routes: Routes = [
  {path:"",component:HomeComponentComponent},
  {path:"signup",component:SignUpCompComponent},
  {path:"login",component:LoginCompComponent},
  {path:'admin', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
