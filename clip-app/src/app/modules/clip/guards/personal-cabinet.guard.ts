import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAccessService } from '../services/user-access.service';

@Injectable({
  providedIn: 'root',
})
export class PersonalCabinetGuard implements CanActivate {
  constructor(private userAccessService: UserAccessService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userAccessService.personalCabinetAccess;
  }
}
