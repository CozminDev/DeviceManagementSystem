import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.auth.isLoggedIn == false) return true;
      else {
          this.router.navigate(['device']);
          return false;
      }
  }
}
