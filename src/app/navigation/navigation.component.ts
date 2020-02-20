import { Component, Input } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent {
  @Input() route = "Home";

  constructor(
    private userService: UserService,
    private storage: Storage,
    private nav: NavController
  ) {}
  user$ = this.userService.getUser();

  logOut() {
    this.storage.remove("id_token");
    this.nav.navigateRoot([`/login`]);
  }
}
