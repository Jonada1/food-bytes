import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MealsPerDayComponent } from './meals-per-day/meals-per-day.component';
import { MealPerDayComponent } from './meal-per-day/meal-per-day.component';
import { RouterModule } from '@angular/router';
import { ImagesService } from '../images/images.service';

@NgModule({
  declarations: [MealsPerDayComponent, MealPerDayComponent],
  providers: [ImagesService],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MealsPerDayComponent }])
  ]
})
export class MealsModule {}
