import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakedownRatioComponent } from './takedown-ratio.component';

describe('TakedownRatioComponent', () => {
  let component: TakedownRatioComponent;
  let fixture: ComponentFixture<TakedownRatioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakedownRatioComponent]
    });
    fixture = TestBed.createComponent(TakedownRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
