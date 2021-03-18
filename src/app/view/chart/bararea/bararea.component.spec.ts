import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarareaComponent } from './bararea.component';

describe('BarareaComponent', () => {
  let component: BarareaComponent;
  let fixture: ComponentFixture<BarareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
