import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertServiceService } from './alert-service.service';
import { Alert } from './_models';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (true) {
        alert('you are not to view this page')
     // this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
