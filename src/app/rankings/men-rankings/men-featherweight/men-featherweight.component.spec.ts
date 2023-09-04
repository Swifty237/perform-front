import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenFeatherweightComponent } from './men-featherweight.component';

describe('MenFeatherweightComponent', () => {
  let component: MenFeatherweightComponent;
  let fixture: ComponentFixture<MenFeatherweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenFeatherweightComponent]
    });
    fixture = TestBed.createComponent(MenFeatherweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
