import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDigitMathComponent } from './two-digit-math.component';

describe('TwoDigitMathComponent', () => {
  let component: TwoDigitMathComponent;
  let fixture: ComponentFixture<TwoDigitMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDigitMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDigitMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
