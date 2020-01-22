import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-diary',
  templateUrl: 'diary.page.html',
  styleUrls: ['diary.page.scss']
})
export class DiaryPage {
  currentImage: any;

  constructor(private camera: Camera, public photoService: PhotoService, public toastController: ToastController) { }

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
