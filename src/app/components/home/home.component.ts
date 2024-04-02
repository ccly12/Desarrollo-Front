import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper | undefined;

  constructor() {
    this.mySwiper = undefined; 
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
