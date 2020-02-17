import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import { ImagesService } from '../images/images.service';
import { UserService } from '../user/user.service';
import { filter, map, startWith } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  constructor(private imageService: ImagesService) {}
  answeredIds: string[] = [];
  addedAnswered$ = new BehaviorSubject<string>(null);
  enteredView$ = new BehaviorSubject<boolean>(false);
  imagesWithoutQuestionnaire$ = this.getImagesWithotuQuesttionaire();

  ngOnInit(): void {}
  ionViewWillEnter() {
    this.imagesWithoutQuestionnaire$ = this.getImagesWithotuQuesttionaire();
  }
  getImagesWithotuQuesttionaire() {
    return combineLatest([
      this.imageService.getImagesWithoutQuestionnaires(),
      this.addedAnswered$.pipe(startWith(''))
    ]).pipe(
      map(([questionnaires]) =>
        questionnaires.filter(x => !this.answeredIds.includes(x.id))
      )
    );
  }

  addAnswered(id: string) {
    this.answeredIds.push(id);
    this.addedAnswered$.next(id);
  }
}
