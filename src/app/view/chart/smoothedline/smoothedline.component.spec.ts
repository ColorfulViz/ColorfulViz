import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothedlineComponent } from './smoothedline.component';

describe('SmoothedlineComponent', () => {
  let component: SmoothedlineComponent;
  let fixture: ComponentFixture<SmoothedlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmoothedlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothedlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
