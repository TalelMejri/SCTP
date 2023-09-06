import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.scss']
})
export class AdminModuleComponent implements OnInit {

  ngOnInit(): void {
   
  }

  constructor( ){

  }

  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
}
