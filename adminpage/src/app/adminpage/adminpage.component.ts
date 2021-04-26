import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {adminapi} from './admin/Admin'
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
    username='';
    password='';
    invaildform:boolean=false
    message='';
  constructor(private route: Router, private service: SharedService) { }

  ngOnInit(): void {
  }
  login(){
    const logindata ={
      username: this.username,
     password: this.password
  };
    
    this.service.adminlogin(logindata).subscribe((data: any)=>{
  
      this.message = data.message
    
    if (data.token){
      window.localStorage.setItem('token',data.token)
      window.localStorage.setItem('username', this.username)
      console.log(this.message)
      this.route.navigate(['/admin'])
      
    }else {
        this.invaildform=true
      
        alert(data.message) 
        console.log('username or password invaild')
      
    };
    
    
    })
    }
    
    
}
