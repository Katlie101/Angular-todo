import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated():boolean{
    const token = localStorage.getItem('authToken')
    return !!token // returns truee if token exist, otherwise false
  }

  login(username:string,password:string){
    localStorage.setItem('authToken',username)
  }

  logout(){
    localStorage.removeItem('authToken')
  }
  
}
