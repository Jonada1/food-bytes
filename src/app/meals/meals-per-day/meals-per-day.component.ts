import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../images/images.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meals-per-day',
  templateUrl: './meals-per-day.component.html'
})
export class MealsPerDayComponent implements OnInit {
  constructor(private imagesService: ImagesService) {}

  meals$: Observable<{ [index: string]: Date[] }>;

  ngOnInit() {
    this.updateMeals();
  }

  ionViewWillEnter() {
    this.updateMeals();
  }

  updateMeals() {
    this.meals$ = this.imagesService.getMeals();
  }
}
