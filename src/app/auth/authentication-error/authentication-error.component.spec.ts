import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationErrorComponent } from './authentication-error.component';

describe('AuthenticationErrorComponent', () => {
  let component: AuthenticationErrorComponent;
  let fixture: ComponentFixture<AuthenticationErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationErrorComponent]
    });
    fixture = TestBed.createComponent(AuthenticationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
