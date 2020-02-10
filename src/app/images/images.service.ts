import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {}
  upload(image: File) {
    console.log(image)
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<Image>('images/upload', formData);
  }
}
