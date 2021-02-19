import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  /**
   *
   */
   constructor(
     private router: Router
   ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = localStorage.getItem('isloggedIn');
    if(isLoggedIn){
      return true;
    }

  this.router.navigate(['./Authentication/Login'],{queryParams:{returnUrl:state.url}})
  return false;
  }
}
