import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questionnaire, PostQuestionnaireDto } from './questionnaire.model';
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

  public answerQuestionnaire(questionnaire: PostQuestionnaireDto) {
    return this.http.post<void>('questionnaire', questionnaire);
  }
}
