import { Component } from '@angular/core';
import { apiBase } from '../../environments/urls';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  apiBase = apiBase;
  constructor() { }

}
