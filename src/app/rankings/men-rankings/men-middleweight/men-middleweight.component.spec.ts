import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenMiddleweightComponent } from './men-middleweight.component';

describe('MenMiddleweightComponent', () => {
  let component: MenMiddleweightComponent;
  let fixture: ComponentFixture<MenMiddleweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenMiddleweightComponent]
    });
    fixture = TestBed.createComponent(MenMiddleweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
