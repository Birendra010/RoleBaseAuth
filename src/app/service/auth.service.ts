import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseAPI='http://localhost:3000/user'

  constructor(private http:HttpClient) { }
//return All Data via get method
  getAll(){
    return this.http.get(this.baseAPI)
  }
//get record by single id
  getById(id:any){
    return this.http.get(this.baseAPI+'/'+id);
  }
//register user via post method
  registerData(inputdata:any){
return this.http.post(this.baseAPI,inputdata)
  }
  //update user via put method 
updateData(id:any,inputdata:any){
  return this.http.put(this.baseAPI+'/'+id,inputdata)
}
//Get Username
isLoggedIn(){
  return sessionStorage.getItem('username')!=null
}
//Get User role
getUserRole(){
  return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():''; 
}

}
