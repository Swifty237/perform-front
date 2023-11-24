import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakedownDefenseComponent } from './takedown-defense.component';

describe('TakedownDefenseComponent', () => {
  let component: TakedownDefenseComponent;
  let fixture: ComponentFixture<TakedownDefenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakedownDefenseComponent]
    });
    fixture = TestBed.createComponent(TakedownDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
