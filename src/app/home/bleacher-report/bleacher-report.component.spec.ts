import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BleacherReportComponent } from './bleacher-report.component';

describe('BleacherReportComponent', () => {
  let component: BleacherReportComponent;
  let fixture: ComponentFixture<BleacherReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BleacherReportComponent]
    });
    fixture = TestBed.createComponent(BleacherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
