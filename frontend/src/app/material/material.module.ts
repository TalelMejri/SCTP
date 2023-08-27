import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule }from "@angular/material/button"
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from "@angular/material/input"
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatBadgeModule
  ],
  exports:[
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
