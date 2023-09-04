import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenBantamweightComponent } from './women-bantamweight.component';

describe('WomenBantamweightComponent', () => {
  let component: WomenBantamweightComponent;
  let fixture: ComponentFixture<WomenBantamweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenBantamweightComponent]
    });
    fixture = TestBed.createComponent(WomenBantamweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
