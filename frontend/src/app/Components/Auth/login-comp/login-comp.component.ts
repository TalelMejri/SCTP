import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import {Store} from "@ngxs/store"
import { SetUser, Settoken, isAuth } from 'src/app/Store/state';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.scss']
})
export class LoginCompComponent {

  hidden:Boolean=true;
  constructor(private Router:Router,private MatSnackBar:MatSnackBar,private formbuilder:FormBuilder,private AuthServiceService:AuthServiceService,private Store:Store) { 
    this.LoginForm=this.formbuilder.group({
      email:this.emailRegister,
      password:this.passwordRegister
    })
  }

  emailRegister=new FormControl('',[Validators.required,Validators.email]);
  passwordRegister=new FormControl('',[Validators.required]);

  getEmailError(){
    if(this.emailRegister.touched){
      if(this.emailRegister.hasError('required')){
        return 'Email is required';
      }else if(this.emailRegister.hasError('email')){
        return 'Email is invalid';
      }
    }
    return '';
  }

  getPasswordError(){
    if(this.passwordRegister.touched){
      if(this.passwordRegister.hasError('required')){
        return 'Password is required';
      }
    }
    return '';
  }

  LoginForm:FormGroup;

  Login(){
    if(this.LoginForm.valid){
      this.AuthServiceService.login(this.LoginForm.value).subscribe((res:any)=>{
        this.Store.dispatch([
          new SetUser(res.user),
          new Settoken(res.token),
          new isAuth(true)
        ]);
        if(res.user["role"]=="Client"){
          this.Router.navigate([""]);
        }else{
          this.Router.navigate(['dashboard']);
        }
        this.MatSnackBar.open('correct','close',{
          duration:2000
        })
      })
    }else{
    this.LoginForm.markAllAsTouched();
    }
  }
}
