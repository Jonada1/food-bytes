import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router, private storage: Storage) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = this.storage.get('id_token');

        if (!Boolean(token)) {
            this.router.navigateByUrl('/login');
        }
        return true;
    }
}
