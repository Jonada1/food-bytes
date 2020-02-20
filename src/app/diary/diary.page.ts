import { Component, OnDestroy } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { ToastController } from "@ionic/angular";

import { PhotoService } from "../services/photo.service";
import { ImagesService } from "../images/images.service";
import { Observable, Subscription } from "rxjs";
import { Image } from "../images/image.model";
import { apiBase } from "../../environments/urls";
import { tap } from "rxjs/operators";
function dataURLtoFile(dataurl, filename) {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}
@Component({
  selector: "app-diary",
  templateUrl: "diary.page.html",
  styleUrls: ["diary.page.scss"]
})
export class DiaryPage implements OnDestroy {
  apiBase = apiBase;
  currentImage: string;
  analyzedImage: Image;
  loading = false;
  uploadSubscription: Subscription;
  constructor(
    private camera: Camera,
    private toastController: ToastController,
    private imageService: ImagesService
  ) {}

  ngOnDestroy() {
    this.uploadSubscription.unsubscribe();
  }

  saveImage() {
    if (this.currentImage) {
      this.loading = true;
      this.uploadSubscription = this.imageService
        .upload(dataURLtoFile(this.currentImage, "image.jpg"))
        .subscribe(
          analyzedImage => {
            this.analyzedImage = analyzedImage;
            this.loading = false;
            this.currentImage = null;
          },
          () => {
            this.loading = false;
             this.toastController.create({
              message: 'Could not start the server',
              duration: 2000,
              position: "top"
            }).then(toast => toast.present);
          }
        );
    }
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.loading = true;

    this.camera.getPicture(options).then(
      imageData => {
        this.currentImage = "data:image/jpeg;base64," + imageData;
        this.loading = false;
      },
      async err => {
        this.loading = false;
        // Handle error
        const toast = await this.toastController.create({
          message: err,
          duration: 2000,
          position: "top"
        });
        toast.present();
      }
    );
  }
}
