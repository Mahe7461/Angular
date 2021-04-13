import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  logInForm: FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
    this.logInForm= new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(6)])
    }
    );
  }
 Onsubmit(){
   if(this.logInForm?.invalid){
     return;
   }

 }
}