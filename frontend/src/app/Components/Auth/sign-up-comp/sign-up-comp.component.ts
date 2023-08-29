import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-sign-up-comp',
  templateUrl: './sign-up-comp.component.html',
  styleUrls: ['./sign-up-comp.component.scss']
})
export class SignUpCompComponent {
  codeSec:string=Math.random().toString(36).substring(2,8) + Math.random().toString(36).substring(2, 2);
  anotherCode(){
    this.codeSec=Math.random().toString(36).substring(2,8) + Math.random().toString(36).substring(2, 2);
  }

  constructor(private MatSnackBar:MatSnackBar,private formbuilder:FormBuilder,private ServicesService:ServicesService){
    this.SignUpRegister=this.formbuilder.group({
      nom:this.nameRegister,
      prenom:this.prenomRegister,
      email:this.emailRegister,
      password:this.passwordRegister,
      code:this.codeRegister,
      mobile:this.mobileRegister,
      sex:this.sexRegister,
    })
  }

  SignUpRegister:FormGroup;

   codeSecValidator(codeSec: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const enteredCode = control.value;
      if (enteredCode === codeSec) {
        return null;  
      } else {
        return { 'invalidCode': true };  
      }
    };
  }

  nameRegister=new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]);
  prenomRegister=new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]);
  emailRegister=new FormControl('',[Validators.required,Validators.email]);
  passwordRegister=new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]);
  codeRegister=new FormControl('',[Validators.required,this.codeSecValidator(this.codeSec)]);
  mobileRegister=new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]);
  sexRegister=new FormControl('',[Validators.required]);


   
  getNameError(){
    if(this.nameRegister.touched){
      if(this.nameRegister.hasError('required')){
        return 'Name is required';
      }else if(this.nameRegister.hasError('minlength')){
        return 'Name must be at least 3 characters';
      }else if(this.nameRegister.hasError('maxlength')){
        return 'Name must be at most 10 characters';
      }
    }
    return '';
  }

  getPrenomError(){
    if(this.prenomRegister.touched){
      if(this.prenomRegister.hasError('required')){
        return 'Prenom is required';
      }else if(this.prenomRegister.hasError('minlength')){
        return 'Prenom must be at least 3 characters';
      }else if(this.prenomRegister.hasError('maxlength')){
        return 'Prenom must be at most 10 characters';
      }
    }
    return '';
  }

  getPasswordError(){
    if(this.passwordRegister.touched){
      if(this.passwordRegister.hasError('required')){
        return 'Password is required';
      }else if(this.passwordRegister.hasError('minlength')){
        return 'Password must be at least 8 characters';
      }else if(this.passwordRegister.hasError('maxlength')){
        return 'Password must be at most 20 characters';
      }
    }
    return '';
  }

  getcodeError(){
    if(this.codeRegister.touched){
      if(this.codeRegister.hasError('required')){
        return 'Code is required';
      }else if(this.codeRegister.hasError('invalidCode')){
        return 'Code is invalid';
      }
    }
    return '';
  }
  getEmailError(){
    if(this.emailRegister.touched){
      if(this.emailRegister.hasError('required')){
        return 'Email is required';
      }else{
        return 'Not a valid email';
      }
    }
    return '';
  }

  getMobileError(){
    if(this.mobileRegister.touched){
      if(this.mobileRegister.hasError('required')){
        return 'Mobile is required';
      }else if(this.mobileRegister.hasError('minlength')){
        return 'Mobile must be at least 8 characters';
      }else if(this.mobileRegister.hasError('maxlength')){
        return 'Mobile must be at most 8 characters';
      }
    }
    return '';
  }

  getSexError(){
    if(this.sexRegister.touched){
      if(this.sexRegister.hasError('required')){
        return 'Sex is required';
    }
  }
  return '';
}

  SignUp(){
    if(this.SignUpRegister.valid){
        this.ServicesService.singup(this.SignUpRegister.value).subscribe((res)=>{
            this.MatSnackBar.open('Account created successfully','Close',{duration:2000});
        });
    }else{
      this.SignUpRegister.markAllAsTouched();
    }
  }

}
