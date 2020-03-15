import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from '../../user/user.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Image } from '../image.model';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit, OnDestroy {
  @Input() shouldReload: BehaviorSubject<boolean>;
  pages = 1;
  shouldReloadSubscription: Subscription;
  constructor(
    private userService: UserService,
    private imagesService: ImagesService
  ) {}
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
    this.extraPagesSubscription.push(
      this.userService.getUserImages(this.pages).subscribe(images => {
        this.images = [...this.images, ...images];
        if (images.length === 5) {
          this.pages++;
        }
        event.target.complete();
      })
    );
  }

  async deleteImage(imageId: string) {
    await this.imagesService.delete(imageId);
    this.images = this.images.filter(x => x.id !== imageId);
    if (this.images.length < 5) {
      this.extraPagesSubscription.push(
        this.userService.getUserImages(this.pages).subscribe(images => {
          this.images = [...this.images, ...images];
          if (images.length === 5) {
            this.pages++;
          }
        })
      );
    }
  }
}
