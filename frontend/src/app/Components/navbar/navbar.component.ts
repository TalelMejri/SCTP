import { Component,Input,Output,EventEmitter, OnInit} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import {Store} from "@ngxs/store"
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Logout } from 'src/app/Store/state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit   {

    User:any=[];
    ngOnInit(): void {
       this.User= this.Store.selectSnapshot((state)=>state.AuthStore?.User);
    }
   isChecked=false;
   choseList:string="mat";
    constructor(public AuthServiceService:AuthServiceService,private Store:Store,private router:Router){}
 
  
   @Input() modeCurrent:string="nightlight_round";
   @Output() changeMode=new EventEmitter<MatSlideToggleChange>();
   
   
   LogoutUser(){
    this.Store.dispatch([
      new Logout()
    ]);
    localStorage.removeItem("token");
    this.router.navigate([''])
    location.reload();//refresh
   }
}
