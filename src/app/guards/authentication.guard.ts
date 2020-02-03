import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router, private storage: Storage) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = this.storage.id_token;

        if (!Boolean(token)) {
            this.router.navigateByUrl('/login');
        }
        return true;
    }
}
