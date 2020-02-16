import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }
  tryPost() {
    return this.http.post('images', {});
  }
  upload(image: File) {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<Image>('images/upload', formData);
  }

  getImagesWithoutQuestionnaires() {
    return this.http.get<Image[]>('images/without-questionnaire');
  }
}
