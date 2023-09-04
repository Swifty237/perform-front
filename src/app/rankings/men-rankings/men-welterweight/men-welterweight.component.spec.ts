import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenWelterweightComponent } from './men-welterweight.component';

describe('MenWelterweightComponent', () => {
  let component: MenWelterweightComponent;
  let fixture: ComponentFixture<MenWelterweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenWelterweightComponent]
    });
    fixture = TestBed.createComponent(MenWelterweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
