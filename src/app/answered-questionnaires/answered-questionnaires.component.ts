import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images/images.service';

@Component({
  selector: 'app-answered-questionnaires',
  templateUrl: './answered-questionnaires.component.html',
  styleUrls: ['./answered-questionnaires.component.scss']
})
export class AnsweredQuestionnairesComponent implements OnInit {
  constructor(private imagesService: ImagesService) {}
  slideOpts = {
    initialSlide: 0,
  };
  answeredQuestionnaires$ = this.imagesService.getImagesWithQuestionnaires();
  ngOnInit() {}

  ionViewWillEnter() {
    this.answeredQuestionnaires$ = this.imagesService.getImagesWithQuestionnaires();
  }
}
