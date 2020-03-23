import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from '../../images/image.model';

@Component({
  selector: 'app-questionnaire-form-list',
  templateUrl: './questionnaire-form-list.component.html',
  styleUrls: ['./questionnaire-form-list.component.scss'],
})
export class QuestionnaireFormListComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
  };
  @Input() imagesWithoutQuestionnaire: Image[];
  @Output() addAnswered = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
