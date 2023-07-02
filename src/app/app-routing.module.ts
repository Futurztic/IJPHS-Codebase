// import { MapListingMobileComponent } from './map-listing-mobile/map-listing-mobile.component';
import { MapListingPageComponent } from './map-listing-page/map-listing-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BuyLandingComponent } from './buy-landing/buy-landing.component';
import { JournalsPageComponent } from './journals-page/journals-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { EditorialPageComponent } from './editorial-page/editorial-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomepageComponent },
{ path: 'about', component: AboutPageComponent },
{ path: 'journals', component:JournalsPageComponent },
{ path: 'blogs', component:BlogPageComponent },
{ path: 'buy', component: BuyLandingComponent },
{ path: 'editorial', component: EditorialPageComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
