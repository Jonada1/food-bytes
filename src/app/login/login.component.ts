import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { apiBase } from '../../environments/urls';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  checkedbtn: boolean;
  apiBase = apiBase;
  routeParamsSubscription: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

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
