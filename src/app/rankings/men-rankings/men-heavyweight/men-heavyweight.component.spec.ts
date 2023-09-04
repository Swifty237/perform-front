import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenHeavyweightComponent } from './men-heavyweight.component';

describe('MenHeavyweightComponent', () => {
  let component: MenHeavyweightComponent;
  let fixture: ComponentFixture<MenHeavyweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenHeavyweightComponent]
    });
    fixture = TestBed.createComponent(MenHeavyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
