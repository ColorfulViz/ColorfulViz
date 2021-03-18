import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedareaComponent } from './stackedarea.component';

describe('StackedareaComponent', () => {
  let component: StackedareaComponent;
  let fixture: ComponentFixture<StackedareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
