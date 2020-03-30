import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GitHubServiceService } from '../services/git-hub-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmperadorLoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.checkLoggin();
  }
  checkLoggin(): boolean {
    if (localStorage.getItem('user') !== 'null') {
      this.router.navigate(['/search']);
      return false;
    }
    return true;
  }
}
