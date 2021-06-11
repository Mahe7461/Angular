import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
//import { createAction, props } from '@ngrx/store';
//import {LoginRequestPayload} from 'src/app/login';
//import {bcrypt} from 'bcryptjs';
import { EmailValidator } from '@angular/forms';
import {ApiResponse} from '../app/Api';
import { catchError,map,retry } from 'rxjs/operators';
//import { ResetRequestPayload } from './reset-request.payload';
//import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";

auth_token:string;

  constructor(private http:HttpClient,
    //private Toastrser:ToastrService
    ) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/department/');
  }
  
  login(logindata):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.APIUrl +'/api/login/', logindata)//.pipe(
     // retry(1), catchError(this.handleError)
     
    //);
    
    
  }
  adminlogin(logindata):Observable<ApiResponse>{
    debugger;
    return this.http.post<ApiResponse>(this.APIUrl +'/AdminAngular/api/login/', logindata)
    .pipe(
      retry(1), catchError(this.handleError)
    );
    
  }
  
  adminreg(logindata:any):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.APIUrl +'/api/register/', logindata)
    //.pipe(
      //retry(1), catchError(this.handleError)
      
    //); 
    
  }

  //toastsuccess(){
    //this.Toastrser.success('Registered successfully', 'Success');
  //}
  
  //toasterror(){
    //this.Toastrser.error('Invaild username or password', 'Error');
  //}
  
  
  handleError(error){
    let errorMess='';
    window.localStorage.setItem('status',error.status)
    if(error.error instanceof ErrorEvent){
      errorMess=`Error Code: ${error.status.message}`;
    }else{
      errorMess=`Error code: ${error.status}\nMessage:${error.message}`;

    }
       
    window.localStorage.setItem('error',errorMess);
    return throwError(errorMess);
    
    }
 
  getQuesList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl + '/emp/question/');
    }
  addQuestion(val:any){
    return this.http.post(this.APIUrl + '/emp/question/',val);
    const passw= val.Password
   
  }

  updateQuestion(val:any){
    return this.http.put(this.APIUrl + '/emp/question/',val);
  }

  deleteQuestion(val:any){
    return this.http.delete(this.APIUrl + '/emp/question/'+val);
  }


  getLink():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/link/');
  }

  addLink(val:any){
    return this.http.post(this.APIUrl + '/emp/link/',val);
    
   
  }

  updateLink(val:any){
    return this.http.put(this.APIUrl + '/emp/link/',val);
  }

  deleteLink(val:any){
    return this.http.delete(this.APIUrl + '/emp/link/'+val);
  }


  getques():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/question/');
  }

  addques(val:any){
    return this.http.post(this.APIUrl + '/emp/question/',val);
    
   
  }

  updateques(val:any){
    return this.http.put(this.APIUrl + '/emp/question/',val);
  }

  deleteques(val:any){
    return this.http.delete(this.APIUrl + '/emp/question/'+val);
  }
  getsubCat():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/subcat/');
  }

  addsubcat(val:any){
    return this.http.post(this.APIUrl + '/emp/subcat/',val);
    
   
  }

  updatesubcat(val:any){
    return this.http.put(this.APIUrl + '/emp/subcat/',val);
  }

  deletesubcat(val:any){
    return this.http.delete(this.APIUrl + '/emp/subcat/'+val);
  }
  

  getAnswer():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/emp/Answer/');
  }

  addAnswer(val:any){
    return this.http.post(this.APIUrl + '/emp/Answer/',val);
    
   
  }

  updateAnswer(val:any){
    return this.http.put(this.APIUrl + '/emp/Answer/',val);
  }

  deleteAnswer(val:any){
    return this.http.delete(this.APIUrl + '/emp/Answer/'+val);
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

  putPassword(values:any){
    return this.http.put(this.APIUrl + '/api/change-password/',values);
  }
  
 
  resetPassword(data:any){
    debugger;
    let Authorizationt= 'token'+window.localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': Authorizationt
      })
       
    };
    httpOptions.headers =
  httpOptions.headers.set('Authorization', Authorizationt);
  const headers = new HttpHeaders({ 'Authorization': 'Bearer my-toke', 'My-Custom-Header': 'foobar' })
    //let reqheader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}).set('Authorization',this.Authorization);
    return this.http.put(this.APIUrl + '/AdminAngular/api/change-password/',data,httpOptions);
  }
  
}