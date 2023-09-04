import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenFlyweightComponent } from './men-flyweight.component';

describe('MenFlyweightComponent', () => {
  let component: MenFlyweightComponent;
  let fixture: ComponentFixture<MenFlyweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenFlyweightComponent]
    });
    fixture = TestBed.createComponent(MenFlyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
