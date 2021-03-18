import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicareaComponent } from './basicarea.component';

describe('BasicareaComponent', () => {
  let component: BasicareaComponent;
  let fixture: ComponentFixture<BasicareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
