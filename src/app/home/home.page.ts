import { Component } from '@angular/core';
import { apiBase } from '../../environments/urls';
import { BehaviorSubject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  apiBase = apiBase;
  shouldReloadSubject = new BehaviorSubject(false);
  constructor() {
    this.shouldReloadSubject.pipe(startWith(false));
  }
  ionViewWillEnter() {
    this.shouldReloadSubject.next(true);
  }
}
