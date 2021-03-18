import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedlineComponent } from './stackedline.component';

describe('StackedlineComponent', () => {
  let component: StackedlineComponent;
  let fixture: ComponentFixture<StackedlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
