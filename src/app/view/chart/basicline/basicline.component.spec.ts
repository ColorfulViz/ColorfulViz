import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiclineComponent } from './basicline.component';

describe('BasiclineComponent', () => {
  let component: BasiclineComponent;
  let fixture: ComponentFixture<BasiclineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasiclineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasiclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
