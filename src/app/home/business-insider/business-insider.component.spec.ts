import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInsiderComponent } from './business-insider.component';

describe('BusinessInsiderComponent', () => {
  let component: BusinessInsiderComponent;
  let fixture: ComponentFixture<BusinessInsiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessInsiderComponent]
    });
    fixture = TestBed.createComponent(BusinessInsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
