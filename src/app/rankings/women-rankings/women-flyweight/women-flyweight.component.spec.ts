import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenFlyweightComponent } from './women-flyweight.component';

describe('WomenFlyweightComponent', () => {
  let component: WomenFlyweightComponent;
  let fixture: ComponentFixture<WomenFlyweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenFlyweightComponent]
    });
    fixture = TestBed.createComponent(WomenFlyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
