import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsimpleComponent } from './barsimple.component';

describe('BarsimpleComponent', () => {
  let component: BarsimpleComponent;
  let fixture: ComponentFixture<BarsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarsimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
