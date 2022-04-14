import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
 url:string="http://localhost:9003/"
 constructor(private http:HttpClient){ }

 public doCustomerSignup(customer:any){
   return this.http.post(this.url+"saveCustomer",customer,{responseType :'text'});
 }
 public doDriverSignup(driver:any){
   return this.http.post(this.url+"saveDriver",driver,{responseType :'text'});
 }

 name:string;
 setToken(token:string):void{
   localStorage.setItem('token',token);
 }
 getName(){
   return "";
 }
 public adminLogin(myemail:any,pwd:any):Observable<any>{
   if(myemail=='admin@gmail.com' && pwd=='admin123'){
     this.setToken('abc');
     return of({name:this.getName(),myemail:'admin@gmail.com'});
   }
   return throwError(new Error("Failed to login"));
 }

 public customerLogin(myemail:any,pwd:any):Observable<any>{
  if(myemail=='customer@gmail.com' && pwd=='customer123'){
    this.setToken('abc');
    return of({name:this.getName(),myemail:'customer@gmail.com'});
  }
  return throwError(new Error("Failed to login"));
}
public driverLogin(myemail:any,pwd:any):Observable<any>{
  if(myemail=='driver@gmail.com' && pwd=='driver123'){
    this.setToken('abc');
    return of({name:this.getName(),myemail:'driver@gmail.com'});
  }
  return throwError(new Error("Failed to login"));
}
 
 
}
