import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateLoginService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot,
                routerStateSnapshot: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/dashboard']);
        }
    }
}
