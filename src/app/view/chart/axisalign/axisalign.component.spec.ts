import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisalignComponent } from './axisalign.component';

describe('AxisalignComponent', () => {
  let component: AxisalignComponent;
  let fixture: ComponentFixture<AxisalignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxisalignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisalignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
