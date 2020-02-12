import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import { ImagesService } from '../images/images.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent {
  constructor(private imageService: ImagesService) { }
  imagesWithoutQuestionnaire$ = this.imageService.getImagesWithoutQuestionnaires();
}
