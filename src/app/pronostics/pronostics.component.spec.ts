import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticsComponent } from './pronostics.component';

describe('PronosticsComponent', () => {
  let component: PronosticsComponent;
  let fixture: ComponentFixture<PronosticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PronosticsComponent]
    });
    fixture = TestBed.createComponent(PronosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
