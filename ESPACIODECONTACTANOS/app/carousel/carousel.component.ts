import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { CarouselService } from 'angular4-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public imageSources: string[] = [
    'assets/imageninfor2.jpg',
   'assets/infor2017.jpg',
   'http://cuestiondepolemica.com/wp-content/uploads/2017/09/IMG_0127-500x500.jpg'
 ];


  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.APPEAR,
    autoplay: true,
    autoplayDelay: 3000,
    stopAutoplayMinWidth: 768
  };



  constructor() { }

  ngOnInit() {
    
   
  

  }

}
