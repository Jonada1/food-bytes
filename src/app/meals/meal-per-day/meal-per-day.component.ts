import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-meal-per-day',
  templateUrl: './meal-per-day.component.html'
})
export class MealPerDayComponent {
  // tslint:disable-next-line: variable-name
  private _dayMeals: moment.Moment[];
  get dayMeals(): moment.Moment[] {
    return this._dayMeals;
  }

  @Input('dayMeals')
  set setDayMeals(value: Date[]) {
    this._dayMeals = value.map(val => moment(val));
  }
}
