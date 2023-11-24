import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakedownsComponent } from './takedowns.component';

describe('TakedownsComponent', () => {
  let component: TakedownsComponent;
  let fixture: ComponentFixture<TakedownsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakedownsComponent]
    });
    fixture = TestBed.createComponent(TakedownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
