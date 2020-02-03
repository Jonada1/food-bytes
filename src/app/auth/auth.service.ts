import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiBase } from '../../environments/urls';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storage: Storage) { }

  public isAuthenticated(token: string) {
    return this.http.get<boolean>(`isLoggedIn/${token}`);
  }

  public registerJwtToken(token: string) {
    this.storage.id_token = token;
  }
}
