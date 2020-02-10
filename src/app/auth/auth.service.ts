import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storage: Storage) { }

  public isAuthenticated(token: string) {
    return this.http.get<boolean>(`isLoggedIn/${token}`);
  }

  public registerJwtToken(token: string) {
    if (localStorage) {
      localStorage.id_token = token;
    } else {
      this.storage.set('id_token', token);
    }
  }
}
