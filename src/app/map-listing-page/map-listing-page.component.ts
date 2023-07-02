import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-map-listing-page',
  templateUrl: './map-listing-page.component.html',
  styleUrls: ['./map-listing-page.component.css']
})
export class MapListingPageComponent implements OnInit {

  display: any;
  listings: any;
  center: google.maps.LatLngLiteral = { lat: 32, lng: -97 };
  zoom = 6;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  radius = 5;
  isMap = true;
  public ScreenWidth: any;
  image: any = []
  slideControl: any;
  images: any;
  counter: any;
  width: any;

  constructor(private httpClient: HttpClient) { this.ScreenWidth = window.innerWidth; }
  btn_onclick() {
    this.isMap = !this.isMap;
  }

  
  ngOnInit(): void {
    HostListener
    this.httpClient.get("/assets/commercial.json").subscribe(data => {
      console.log(data);
      this.listings = data;
      // this.slideControl = this.listings.photos.map((x: any, index: any) => (index ? 'outleft' : 'inleft'));
      for (const listing of this.listings) {
        // Retrieve lat and lng values from the 
        const lat = listing.geo.lat;
        const lng = listing.geo.lng;
        const latLng = {
          "lat": lat,
          "lng": lng
        };
        this.markerPositions.push(latLng)
        console.log(this.markerPositions);
      }
      this.image=this.listings.photos[1];
    });
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.ScreenWidth = window.innerWidth;

  }


  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.markerPositions.push(event.latLng.toJSON());
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined)
      this.infoWindow.open(marker);
  }
  //image slider functions
  change(direction: string) {
    this.slideControl = this.images.map((x: any, index: any) => (index ? 'outleft' : 'inleft'));

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
