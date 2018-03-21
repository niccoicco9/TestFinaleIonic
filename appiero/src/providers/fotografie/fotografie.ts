
import { Injectable } from '@angular/core';

import { Camera, CameraOptions } from "@ionic-native/camera";

@Injectable()
export class FotografieProvider {

  constructor(private camera: Camera) {}

  scattaFotografia(): Promise<string>{
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    
    return this.camera.getPicture(options);
  }

}
