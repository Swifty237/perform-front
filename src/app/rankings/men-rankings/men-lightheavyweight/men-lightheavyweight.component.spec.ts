import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenLightheavyweightComponent } from './men-lightheavyweight.component';

describe('MenLightheavyweightComponent', () => {
  let component: MenLightheavyweightComponent;
  let fixture: ComponentFixture<MenLightheavyweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenLightheavyweightComponent]
    });
    fixture = TestBed.createComponent(MenLightheavyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
