import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  images = [];
  constructor() {
  }

  saveImage(currentImageText: string, currentImageLink: string) {
    this.images.push([currentImageText, currentImageLink]);
  }

  getImages() {
    return this.images;
  }
}
