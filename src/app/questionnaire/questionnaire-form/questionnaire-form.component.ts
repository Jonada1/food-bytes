import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../images/image.model';
import { FormBuilder, FormControl } from '@angular/forms';
import { apiBase } from '../../../environments/urls';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss'],
})
export class QuestionnaireFormComponent implements OnInit {
  apiBase = apiBase;
  @Input() image: Image;
  constructor(private fb: FormBuilder) { }

  questionnaireForm = this.fb.group({
    answer1: new FormControl(''),
    answer2: new FormControl(''),
    answer3: new FormControl(''),
    answer4: new FormControl(''),
    answer5: new FormControl(''),
  });

  submit() {
    console.log(this.questionnaireForm.value);
  }
  ngOnInit() { }

}
