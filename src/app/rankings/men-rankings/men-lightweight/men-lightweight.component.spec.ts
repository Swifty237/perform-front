import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenLightweightComponent } from './men-lightweight.component';

describe('MenLightweightComponent', () => {
  let component: MenLightweightComponent;
  let fixture: ComponentFixture<MenLightweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenLightweightComponent]
    });
    fixture = TestBed.createComponent(MenLightweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
