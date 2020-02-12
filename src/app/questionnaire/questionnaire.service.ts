import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questionnaire } from './questionnaire.model';
import { apiBase } from '../../environments/urls';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http: HttpClient) {
  }
  public getQuestionnaires() {
    return this.http.get<Questionnaire[]>('questionnaire/user');
  }
}
