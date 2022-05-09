import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticationService.isUserLoggedIn()) return true;
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    return false;
  }
}
