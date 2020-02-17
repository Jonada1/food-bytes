import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from '../../user/user.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Image } from '../image.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit, OnDestroy {
  @Input() shouldReload: BehaviorSubject<boolean>;
  pages = 1;
  shouldReloadSubscription: Subscription;
  constructor(private userService: UserService) {}
  images: Image[];
  extraPagesSubscription: Subscription[] = [];
  imagesSubscription = this.userService
    .getUserImages(this.pages)
    .subscribe(x => (this.images = x));
  ngOnInit() {
    this.shouldReloadSubscription = this.shouldReload.subscribe(() => {
      this.pages = 1;
      if (this.imagesSubscription) {
        this.imagesSubscription.unsubscribe();
      }

      this.extraPagesSubscription.forEach(x => x.unsubscribe());
      this.imagesSubscription = this.userService
        .getUserImages(this.pages)
        .subscribe(images => {
          this.images = images;
        });
    });
  }
  ngOnDestroy(): void {
    this.shouldReloadSubscription.unsubscribe();
    this.extraPagesSubscription.forEach(x => x.unsubscribe());
  }
  addPageToShow(event) {
    this.pages++;
    this.extraPagesSubscription.push(
      this.userService.getUserImages(this.pages).subscribe(images => {
        this.images = [...this.images, ...images];
        event.target.complete();
      })
    );
  }
}
