import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSidebarOpen = false;
  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
    
 
}
