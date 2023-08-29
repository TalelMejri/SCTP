import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { SignUpCompComponent } from './Components/Auth/sign-up-comp/sign-up-comp.component';


const routes: Routes = [
  {path:"",component:HomeComponentComponent},
  {path:"signup",component:SignUpCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
