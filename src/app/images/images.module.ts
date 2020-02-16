import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image/image.component';
import { IonicModule } from '@ionic/angular';
import { ImageColorsComponent } from './image-colors/image-colors.component';

@NgModule({
  declarations: [ImageListComponent, ImageComponent, ImageColorsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
  ],
  exports: [ImageListComponent, ImageComponent]
})
export class ImagesModule { }
