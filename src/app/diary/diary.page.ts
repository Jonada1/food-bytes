import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

import { PhotoService } from '../services/photo.service';
import { ImagesService } from '../images/images.service';
import { Observable } from 'rxjs';
import { Image } from '../images/image.model';
import { apiBase } from '../../environments/urls';
function dataURLtoFile(dataurl, filename) {

  const arr = dataurl.split(',');
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
  selector: 'app-diary',
  templateUrl: 'diary.page.html',
  styleUrls: ['diary.page.scss']
})
export class DiaryPage {
  apiBase = apiBase;
  currentImage: any;
  analyzedImage$: Observable<Image>;
  constructor(
    private camera: Camera,
    private toastController: ToastController,
    private imageService: ImagesService) { }

  saveImage() {
    if (this.currentImage) {
      this.analyzedImage$ = this.imageService.upload(dataURLtoFile(this.currentImage, 'image.jpg'));
    }
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, async (err) => {
      // Handle error
      const toast = await this.toastController.create({
        message: err,
        duration: 2000,
        position: 'top',
      });
      toast.present();
    });
  }

}
