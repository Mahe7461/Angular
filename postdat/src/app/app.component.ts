import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  Name:String 
  Email:any
  Password:any
  Gender:any
  constructor(private http:HttpClient){}
  post(){
    let url="http://127.0.0.1:8000/userdata/"
    this.http.post(url,{Name:this.Name,Email:this.Email,Password:this.Password,Gender:this.Gender}).toPromise().then((data:any)=>{
      console.log(data)
    })

    
  }
}
