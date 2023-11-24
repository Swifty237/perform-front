import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspnComponent } from './espn.component';

describe('EspnComponent', () => {
  let component: EspnComponent;
  let fixture: ComponentFixture<EspnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspnComponent]
    });
    fixture = TestBed.createComponent(EspnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
