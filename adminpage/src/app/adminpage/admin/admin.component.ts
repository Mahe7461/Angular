import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title='admin'
  create:boolean=false
  name=localStorage.getItem('username')
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
createadmin(){
  this.create=true
  this.route.navigate(['/createadmin'])

}
logout(){
  this.route.navigate(['/adminpage'])
  localStorage.clear()
}

}
