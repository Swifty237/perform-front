import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformHelpComponent } from './perform-help.component';

describe('PerformHelpComponent', () => {
  let component: PerformHelpComponent;
  let fixture: ComponentFixture<PerformHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformHelpComponent]
    });
    fixture = TestBed.createComponent(PerformHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
