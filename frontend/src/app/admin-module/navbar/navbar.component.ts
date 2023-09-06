import { Component, EventEmitter, Output,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/Store/state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private Store:Store,private router:Router){

  }

  data:any;
  ngOnInit(): void {
      this.data=this.Store.selectSnapshot(info=>info.AuthStore?.User);
  }
  
  @Output() sidebarAction=new EventEmitter();


  LogoutUser(){
    this.Store.dispatch([
      new Logout()
    ]);
    localStorage.removeItem("token");
    localStorage.removeItem("ModeAdmin");
    this.router.navigate(['../../']);
   }
}
