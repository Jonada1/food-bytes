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
  hasReachedEnd = false;
  constructor(
    private userService: UserService,
    private imagesService: ImagesService
  ) {}
  images: Image[] = [];
  extraPagesSubscription: Subscription[] = [];
  imagesSubscription: Subscription;
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
          this.updatePageAndEndReach(images);
        });
    });
  }
  ngOnDestroy(): void {
    this.shouldReloadSubscription.unsubscribe();
    this.extraPagesSubscription.forEach(x => x.unsubscribe());
  }
  addPageToShow(event) {
    if (this.hasReachedEnd) {
      event.target.complete();
      return;
    }
    this.extraPagesSubscription.push(
      this.userService.getUserImages(this.pages).subscribe(images => {
        this.loadImages(images);
        event.target.complete();
      })
    );
  }

  private loadImages(images: Image[]) {
    this.images = [...(this.images || []), ...images];
    this.updatePageAndEndReach(images);
  }

  private updatePageAndEndReach(images: Image[]) {
    if (images.length < 5) {
      this.hasReachedEnd = true;
    } else {
      this.pages++;
    }
  }

  async deleteImage(imageId: string) {
    await this.imagesService.delete(imageId);
    this.images = this.images.filter(x => x.id !== imageId);
    if (this.images.length < 5) {
      this.pages = 1;
      this.extraPagesSubscription.push(
        this.userService.getUserImages(this.pages).subscribe(images => {
          this.images = images;
          this.updatePageAndEndReach(images);
        })
      );
    }
  }
}
