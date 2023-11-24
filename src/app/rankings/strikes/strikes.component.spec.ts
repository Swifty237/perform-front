import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikesComponent } from './strikes.component';

describe('StrikesComponent', () => {
  let component: StrikesComponent;
  let fixture: ComponentFixture<StrikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrikesComponent]
    });
    fixture = TestBed.createComponent(StrikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
