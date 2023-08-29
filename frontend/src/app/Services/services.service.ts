import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environnement';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  singup(User:User){
    return this.http.post(`${environment.apiBaseUrl}auth/SignUp`,User);
  }
}
