import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyLandingComponent } from './buy-landing.component';

describe('BuyLandingComponent', () => {
  let component: BuyLandingComponent;
  let fixture: ComponentFixture<BuyLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
