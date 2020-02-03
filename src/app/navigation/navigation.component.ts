import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() route = 'Home';

  constructor(private userService: UserService) { }
  user$ = this.userService.getUser();

}
