import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnsweredQuestionnairesComponent } from './answered-questionnaires.component';
import { AnsweredQuestionnaireComponent } from './answered-questionnaire/answered-questionnaire.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AnsweredQuestionnairesComponent,
    AnsweredQuestionnaireComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AnsweredQuestionnairesComponent }
    ])
  ]
})
export class AnsweredQuestionnairesModule {}
