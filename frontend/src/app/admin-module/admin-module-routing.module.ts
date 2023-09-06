import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

const routes: Routes = [
  { path: "", component: LayoutAdminComponent ,
    children: [
    { path: 'dash', component: DashboardComponent },
    { path: 'addCat', component: AddCategorieComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
