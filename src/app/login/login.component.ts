import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiBase } from '../../environments/urls';
import { tap, filter } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  apiBase = apiBase;
  routeParamsSubscription: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private iab: InAppBrowser) { }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.pipe(
      filter(params => Boolean(params.token)),
      tap(params => {
        this.authService.registerJwtToken(params.token);
        this.router.navigateByUrl('/tabs/home');
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}
