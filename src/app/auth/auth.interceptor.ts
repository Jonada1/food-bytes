import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiBase } from '../../environments/urls';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private storage: Storage) { }
    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        // handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            // navigate /delete cookies or whatever
            this.router.navigateByUrl(`/login`);
            return of(err.message);
        }
        return throwError(err);
    }

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = this.storage.get('id_token');

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + idToken),
                url: `${apiBase}/${req.url}`
            });

            return next.handle(cloned).pipe(catchError(x => this.handleAuthError(x)));
        } else {
            return next.handle(req.clone({
                url: `${apiBase}/${req.url}`
            }));
        }
    }
}
