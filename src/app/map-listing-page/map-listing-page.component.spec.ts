import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapListingPageComponent } from './map-listing-page.component';

describe('MapListingPageComponent', () => {
  let component: MapListingPageComponent;
  let fixture: ComponentFixture<MapListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapListingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
