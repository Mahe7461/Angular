import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map,tap} from 'rxjs/operators';
export interface logInForm{
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
}
