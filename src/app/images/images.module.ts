import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [ImageListComponent, ImageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [ImageListComponent]
})
export class ImagesModule { }
