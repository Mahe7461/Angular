import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit {
  username='';
  password='';
  email='';
  message='';
  constructor(private service: SharedService, private route: Router) { }

  ngOnInit(): void {
  }

  create(){
    console.log('udetg')
    const regdata ={
      username: this.username,
     password: this.password,
     email: this.email,
    
  };
  this.service.adminreg(regdata).subscribe((data: any)=>{
  
    this.message = data.message
    if (data.token!=''){
      alert('Registered successfully')

    }
  })
   }
  back(){
    this.route.navigate(['/admin'])
  }
    
      

  }

