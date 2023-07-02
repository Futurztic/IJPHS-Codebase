import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialPageComponent } from './editorial-page.component';

describe('EditorialPageComponent', () => {
  let component: EditorialPageComponent;
  let fixture: ComponentFixture<EditorialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
