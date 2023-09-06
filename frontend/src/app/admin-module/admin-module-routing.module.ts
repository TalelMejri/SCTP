import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'addCat', component: AddCategorieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
