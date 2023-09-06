import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    NavbarComponent,
    AsideComponent,
    DashboardComponent,
    AddCategorieComponent,
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    MaterialModule
  ]
})
export class AdminModuleModule { }
