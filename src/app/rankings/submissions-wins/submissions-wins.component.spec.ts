import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsWinsComponent } from './submissions-wins.component';

describe('SubmissionsWinsComponent', () => {
  let component: SubmissionsWinsComponent;
  let fixture: ComponentFixture<SubmissionsWinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionsWinsComponent]
    });
    fixture = TestBed.createComponent(SubmissionsWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
