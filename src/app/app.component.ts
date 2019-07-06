import {Component} from '@angular/core';
import {ImageServiceService} from './image-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentImageText = '';
  currentImageLink = '';
  displayImage = false;
  private currentImage: any;

  constructor(private imageService: ImageServiceService) {
  }

  saveImage() {
    this.imageService.saveImage(this.currentImageText, this.currentImageLink);
  }

  getImages() {
    return this.imageService.getImages();
  }

  showImage(imageElement: any) {
    this.currentImage = imageElement;
    this.displayImage = true;
  }

  closeImage() {
    this.displayImage = false;
  }
}
