import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { createAction, props } from '@ngrx/store';
import {LoginRequestPayload} from 'src/app/login';
import {bcrypt} from 'bcryptjs';
import { EmailValidator } from '@angular/forms';
import {ApiResponse} from 'src/app/_models/api'
import { catchError,map,retry } from 'rxjs/operators';
import { ResetRequestPayload } from './reset-request.payload';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";

auth_token:string;

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/department/');
  }
  login(logindata):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.APIUrl +'/api/login/', logindata).pipe(
      retry(1), catchError(this.handleError)
    );
    
  }
  adminlogin(logindata):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.APIUrl +'/admin/login/', logindata).pipe(
      retry(1), catchError(this.handleError)
    );
    
  }
  handleError(error){
    let errorMess='';
    if(error.error instanceof ErrorEvent){
      errorMess=`Error Code: ${error.status.message}`;
    }else{
      errorMess=`Error code: ${error.status}\nMessage:${error.message}`;

    }
    window.alert(errorMess);
    return throwError(errorMess);
    }
 
  addDepartment(val:any){
    return this.http.post(this.APIUrl + '/emp/department/',val);
    const passw= val.Password
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(passw, salt, function(err, hash) {
          // Store hash in your password DB.
          console.log(hash)
      });
  });
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl + '/emp/department/',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl + '/emp/department/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/employee/');
  }

  addEmployee(values:any){
    return this.http.post(this.APIUrl + '/emp/employee/',values);
  }

  updateEmployee(values:any){
    return this.http.put(this.APIUrl + '/emp/employee/',values);
  }

  deleteEmployee(values:any){
    return this.http.delete(this.APIUrl + '/emp/employee/'+values);
  }
  getallemail():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/emp/employee/');

  }


  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/emp/department/');
  }
  putPassword(values:any){
    return this.http.put(this.APIUrl + '/api/change-password/',values);
  }
  resetPassword(resetRequestPayload: ResetRequestPayload) {
    return this.http.post<boolean>(
      this.APIUrl + 'reset-password/change-password',
      resetRequestPayload
    );
  }
  
}