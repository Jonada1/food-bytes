import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginComponent } from './login/login.component';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { HomePage } from './home/home.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    protected navController: NavController,
    private deeplinks: Deeplinks,
    private router: Router,
  ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.deeplinks.route({
        '/login/:token': LoginComponent
      }).subscribe((match) => {
        setTimeout(() => {
          this.router.navigate(['/login/', match.$args.token]);
        }, 1000);
      }, (nomatch) => {
        console.warn('Unmatched Route', nomatch);
      });
    });
  }
}
