import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikingRatioComponent } from './striking-ratio.component';

describe('StrikingRatioComponent', () => {
  let component: StrikingRatioComponent;
  let fixture: ComponentFixture<StrikingRatioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrikingRatioComponent]
    });
    fixture = TestBed.createComponent(StrikingRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
