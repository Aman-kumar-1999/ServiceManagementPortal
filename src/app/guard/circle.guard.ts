import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class CircleGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) { }
 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.login.isLoggedIn() && (this.login.getUserRole() == 'CIRCLE')) {
      return true;
    }

    this.router.navigate(['']);

    return false;
  }
  
}
