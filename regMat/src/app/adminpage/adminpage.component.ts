import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private router: Router) { }
username='';
password='';
  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/auth'])
  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.username!='admin') {
        alert('you are not to view this page')
     // this.router.navigate(['login']);
      return false;
    }

    return true;
    

  }


}
