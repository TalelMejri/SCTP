import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environnement';
import {BehaviorSubject,tap} from  "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   private loginTest=new BehaviorSubject<Boolean>(false);
   isLogin=this.loginTest.asObservable();

   constructor(private http:HttpClient) {
      const token=localStorage.getItem("token");
      this.loginTest.next(!!token);
    }

    login(data:any){
      return this.http.post(`${environment.apiBaseUrl}auth/login`,data).pipe(tap(
        (res:any)=>{
          this.loginTest.next(true);
          localStorage.setItem("token",res.token);
        }
      ))
    }

}

