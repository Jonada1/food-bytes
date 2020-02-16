import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireService } from './questionnaire.service';
import { ImagesService } from '../images/images.service';
import { QuestionnaireComponent } from './questionnaire.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireFormListComponent } from './questionnaire-form-list/questionnaire-form-list.component';

@NgModule({
  declarations: [QuestionnaireComponent, QuestionnaireFormComponent, QuestionnaireFormListComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: QuestionnaireComponent }])
  ],
  providers: [
    QuestionnaireService,
    ImagesService,
  ],
  exports: [
    QuestionnaireComponent
  ]
})
export class QuestionnaireModule { }
