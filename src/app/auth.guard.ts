import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { finalize, first, Observable, tap } from 'rxjs';
import { ProfileService } from './services/profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private profileService: ProfileService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let result = false;
    return this.profileService.loggedIn$.pipe(
      first(),
      tap(value => result = value),
      finalize(() => {
        if (result === false) {
          this.router.navigate(['']);
        }
      })
    );
  }
}
