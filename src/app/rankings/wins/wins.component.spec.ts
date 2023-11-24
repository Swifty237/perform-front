import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinsComponent } from './wins.component';

describe('WinsComponent', () => {
  let component: WinsComponent;
  let fixture: ComponentFixture<WinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinsComponent]
    });
    fixture = TestBed.createComponent(WinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
