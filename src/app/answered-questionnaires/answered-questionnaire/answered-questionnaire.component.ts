import { Component, OnInit, Input } from '@angular/core';
import { ImageWithQuestionnaire } from '../../images/image.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { apiBase } from '../../../environments/urls';

@Component({
  selector: 'app-answered-questionnaire',
  templateUrl: './answered-questionnaire.component.html',
  styleUrls: ['./answered-questionnaire.component.scss']
})
export class AnsweredQuestionnaireComponent implements OnInit {
  apiBase = apiBase;
  @Input() imageWithQuestionnaire: ImageWithQuestionnaire;

  constructor(private fb: FormBuilder) {}

  questionnaireForm: FormGroup;
  ngOnInit() {
    const {questionnaire} = this.imageWithQuestionnaire;
    this.questionnaireForm = this.fb.group({
      answer1: new FormControl(questionnaire.questionOneAnswer),
      answer2: new FormControl(questionnaire.questionTwoAnswer),
      answer3: new FormControl(questionnaire.questionThreeAnswer),
      answer4: new FormControl(questionnaire.questionFourAnswer),
      answer5: new FormControl(questionnaire.questionFiveAnswer)
    });
  }
}
