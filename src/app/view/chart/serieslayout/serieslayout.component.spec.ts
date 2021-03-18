import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieslayoutComponent } from './serieslayout.component';

describe('SerieslayoutComponent', () => {
  let component: SerieslayoutComponent;
  let fixture: ComponentFixture<SerieslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieslayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
