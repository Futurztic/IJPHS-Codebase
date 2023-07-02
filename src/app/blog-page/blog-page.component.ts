import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

const animationCarousel = [
  state('outright', style({ transform: `translateX(100%)` })),
  state('outleft', style({ transform: `translateX(-100%)` })),
  transition('void=>inleft', [style({ transform: `translateX(0)` })]),
  transition('void=>outleft', [style({ transform: `translateX(-100%)` })]),

  transition('*=>inright', [
    style({ transform: `translateX(-100%)` }),
    animate('260ms ease-in', style({ transform: `translateX(0)` })),
  ]),
  transition('*=>inleft', [
    style({ transform: `translateX(100%)` }),
    animate('260ms ease-in', style({ transform: `translateX(0)` })),
  ]),
  transition('*=>outleft', [
    animate('260ms ease-in', style({ transform: `translateX(-100%)` })),
  ]),
  transition('*=>outright', [
    animate('260ms ease-in', style({ transform: `translateX(100%)` })),
  ]),
];

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {


    listings: any;
  count: number = 0;
  images:any=[]
  counter: number = 0;
  slideControl: any[]=this.images.map((x: any, index: any) => (index ? 'outleft' : 'inleft'));
  width: number = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //retriving listing data
    this.httpClient.get("/assets/commercial.json").subscribe(data =>{
      console.log(data);
      this.listings = data;
    });
  }

  //image slider functions
  change(direction: string) {
    this.slideControl=this.images.map((x: any, index: any) => (index ? 'outleft' : 'inleft'));

      const incr = direction == 'right' ? -1 : +1;
      const prev = this.counter;
      this.counter =
        (this.counter + this.images.length + incr) % this.images.length;
      this.onSlide(this.counter, prev, direction);
    }

    onLoad(el: any) {
      this.width = el.getBoundingClientRect().width;
    }

    onSlide(current: number, prev: number, direction: string) {
      this.slideControl[current] = 'in' + direction;
      this.slideControl[prev] = 'out' + direction;
    }


    //listing functions
    getPrice(x: string) {
      var price = parseInt(x);
      var final_price = '$' + this.numberWithCommas(price);
      return final_price;
    }


    numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    getListingPageID(listing_id: string) {
      var link = '/listings-com/' + listing_id;
      return link;
    }

}


