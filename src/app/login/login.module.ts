import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }])
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
