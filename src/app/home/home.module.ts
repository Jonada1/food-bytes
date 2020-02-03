import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { NavigationModule } from '../navigation/navigation.module';
import { ImagesModule } from '../images/images.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavigationModule,
    ImagesModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
