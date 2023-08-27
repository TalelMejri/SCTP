import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule }from "@angular/material/button"
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports:[
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
