import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenBantamweightComponent } from './men-bantamweight.component';

describe('MenBantamweightComponent', () => {
  let component: MenBantamweightComponent;
  let fixture: ComponentFixture<MenBantamweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenBantamweightComponent]
    });
    fixture = TestBed.createComponent(MenBantamweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
