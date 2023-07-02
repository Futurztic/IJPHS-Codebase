import { Component } from '@angular/core';
import { Router }  from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IJPHS-MainWeb';
  constructor(public router: Router){}
}
