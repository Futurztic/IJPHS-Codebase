import { MapListingPageComponent } from './map-listing-page/map-listing-page.component';
import { BuyLandingComponent } from './buy-landing/buy-landing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from './material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AboutPageComponent } from './about-page/about-page.component';
import { JournalsPageComponent } from './journals-page/journals-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { EditorialPageComponent } from './editorial-page/editorial-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    BuyLandingComponent,
    MapListingPageComponent,
    SignInDialogComponent,
    AboutPageComponent,
    JournalsPageComponent,
    BlogPageComponent,
    EditorialPageComponent

  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
