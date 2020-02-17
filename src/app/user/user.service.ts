import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Image } from '../images/image.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User>('users/current');
  }

  getUserImages(page?: number) {
    return this.http.get<Image[]>(`users/images?page=${page}`);
  }
}
