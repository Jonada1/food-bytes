import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../user/user.service';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent],
})
export class NavigationModule { }
