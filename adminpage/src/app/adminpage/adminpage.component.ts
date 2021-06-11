import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {adminapi} from './admin/Admin'
import { SharedService } from '../shared.service';
import {MessageService} from 'primeng/api';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  title='adminpage'
    username='';
    password='';
    invaildform:boolean=false
    message='';
  constructor(private route: Router,private Toastrser:ToastrService,private messageService: MessageService ,private service: SharedService) { }

  ngOnInit(): void {this.message='';
  }
  showSuccess(){
    this.messageService.add({severity:'success', summary: 'Success', detail:'login successfully'})
  }
  
  toastsuccess(){
    this.Toastrser.success('Registered successfully', 'Success');
  }
  toasterror(){
    this.Toastrser.error('Invaild username or password', 'Error');
  }
  toastinfo(){
    this.Toastrser.info('Your are not allowed', 'Info');
  }
  login(){
    localStorage.removeItem('token')
    const logindata ={
      username: this.username,
     password: this.password
  };
    
    this.service.adminlogin(logindata).subscribe((data: any)=>{
  
      this.message = data.token
      
    
    if (this.message!=""){
      this.invaildform=false
      window.localStorage.setItem('token',data.token)
      
      window.localStorage.setItem('username', this.username)
      console.log(this.message)
      this.route.navigate(['/admin'])
      } 
    else{
      console.log('hi')
      this.toasterror()
    }
    
    })
    
    }

    
    
}
