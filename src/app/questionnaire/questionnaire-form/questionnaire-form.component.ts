import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Image } from '../../images/image.model';
import { FormBuilder, FormControl } from '@angular/forms';
import { apiBase } from '../../../environments/urls';
import { QuestionnaireService } from '../questionnaire.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss']
})
export class QuestionnaireFormComponent implements OnDestroy {
  apiBase = apiBase;
  @Input() image: Image;
  @Output() addAnswered = new EventEmitter();

  answeredQuestionnaireSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private questionnaireService: QuestionnaireService
  ) {}

  questionnaireForm = this.fb.group({
    answer1: new FormControl(1),
    answer2: new FormControl(1),
    answer3: new FormControl(1),
    answer4: new FormControl(1),
    answer5: new FormControl(1)
  });

  ngOnDestroy() {
    if (this.answeredQuestionnaireSubscription) {
      this.answeredQuestionnaireSubscription.unsubscribe();
    }
  }

  submit() {
    this.answeredQuestionnaireSubscription = this.questionnaireService
      .answerQuestionnaire({
        ...this.questionnaireForm.value,
        imageId: this.image.id
      })
      .subscribe(() => {
        this.addAnswered.emit();
      });
  }
}
