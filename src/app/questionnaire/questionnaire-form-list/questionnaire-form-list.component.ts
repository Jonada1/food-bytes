import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../images/image.model';

@Component({
  selector: 'app-questionnaire-form-list',
  templateUrl: './questionnaire-form-list.component.html',
  styleUrls: ['./questionnaire-form-list.component.scss'],
})
export class QuestionnaireFormListComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
  };
  @Input() imagesWithoutQuestionnaire: Image[];
  constructor() { }

  ngOnInit() {}

}
