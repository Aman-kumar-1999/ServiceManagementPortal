import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../User';
import baseUrl from '../helper'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();
  
  
  constructor(private http: HttpClient, private router: Router) { }

  
  public loginDetails(user: User) {
    console.log(user);
    return this.http.post(`${baseUrl}/api/login`, user);
    
   
  }

  public forgetPassword(email:any){
    return this.http.put(`${baseUrl}/forgetPassword`,email);
  }

  public changePassword(changePassword:any){
    return this.http.put(`${baseUrl}/changePassword`,changePassword);
  }

  public updateProfile(updatePofile:any){
    return this.http.put(`${baseUrl}/updatePofile`,updatePofile);
  }

  
  // login user: set token in localStorage

  public loginUser(user:any) {
    localStorage.setItem('token', user);

    return true;
  }

  //isLogin: user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout : remove token from local storage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigate(['']);
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set userDetail
  public setUser(user:any) {
    localStorage.setItem('user', JSON.stringify(user));
    console.log("set value in localStorage is : "+localStorage);
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem('user');
    // console.log("set value in userStr is : "+userStr);
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }


  // get user role

  public getUserRole() {
    // let user = this.getUser();
    // console.log("inside role : "+this.getUser().roleId.roleName);
    // console.log("inside role : "+this.getUser().userType);
    console.log("inside role : "+this.getUser().roleId.userType);

    // return this.getUser().userType;
    return this.getUser().roleId.userType
    // return this.getUser().roleId.roleName;
  }
}
