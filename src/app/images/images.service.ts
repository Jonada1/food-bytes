import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image, ImageWithQuestionnaire } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient) {}
  tryPost() {
    return this.http.post('images', {});
  }
  async delete(imageId: string) {
    return await this.http.delete(`images/${imageId}`).toPromise();
  }
  upload(image: File) {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<Image>('images/upload', formData);
  }

  getImagesWithoutQuestionnaires() {
    return this.http.get<Image[]>('images/without-questionnaire');
  }

  getImagesWithQuestionnaires() {
    return this.http.get<ImageWithQuestionnaire[]>('images/with-questionnaire');
  }

  getMeals() {
    return this.http.get<{[index: string]: Date[]}>('images/meals');
  }
}
