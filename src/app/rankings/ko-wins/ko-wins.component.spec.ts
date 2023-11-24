import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoWinsComponent } from './ko-wins.component';

describe('KoWinsComponent', () => {
  let component: KoWinsComponent;
  let fixture: ComponentFixture<KoWinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KoWinsComponent]
    });
    fixture = TestBed.createComponent(KoWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
