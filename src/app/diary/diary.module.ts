import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiaryPage } from './diary.page';
import { ImagesModule } from '../images/images.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ImagesModule,
    RouterModule.forChild([{ path: '', component: DiaryPage }])
  ],
  declarations: [DiaryPage],
})
export class DiaryPageModule {}
