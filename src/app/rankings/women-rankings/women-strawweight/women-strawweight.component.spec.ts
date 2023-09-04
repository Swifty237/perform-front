import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenStrawweightComponent } from './women-strawweight.component';

describe('WomenStrawweightComponent', () => {
  let component: WomenStrawweightComponent;
  let fixture: ComponentFixture<WomenStrawweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenStrawweightComponent]
    });
    fixture = TestBed.createComponent(WomenStrawweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
