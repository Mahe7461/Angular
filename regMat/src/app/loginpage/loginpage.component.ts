import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  @Input() name:string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  resetpass(){
    this.route.navigate(['/resetpassword'])
  }
}
