import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from '../../user/user.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit, OnDestroy {
  @Input() shouldReload: BehaviorSubject<boolean>;
  shouldReloadSubscription: Subscription;
  constructor(private userService: UserService) {}
  images$ = this.userService.getUserImages();
  ngOnInit() {
    this.shouldReloadSubscription = this.shouldReload.subscribe(x => {
      this.images$ = this.userService.getUserImages();
    });
  }
  ngOnDestroy(): void {
    this.shouldReloadSubscription.unsubscribe();
  }
}
