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
  loginError:string="";
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
          localStorage.setItem("ModeAdmin","true");
          this.Router.navigate(['admin']);
        }
       
      },(error:any)=>{
          if(error.error=="User_Disabled"){
            this.loginError="User Disabled";
          }else if(error.error=="USER_NOT_FOUND"){
            this.loginError="USER NOT FOUND";
          }else if(error.error=="INVALID_CREDENTIALS"){
            this.loginError="INVALID CREDENTIALS";
          }
          this.MatSnackBar.open(this.loginError,'close',{
            duration:5000
          })
      });
    }else{
    this.LoginForm.markAllAsTouched();
    }
  }
}
