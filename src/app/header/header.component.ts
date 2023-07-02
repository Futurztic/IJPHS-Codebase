import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,public dialog: MatDialog){}
  buy="buy"
  journals="journals"
  about="about"
  blogs="blogs"
  editorial="editorial"
  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(SignInDialogComponent);
  }

}
