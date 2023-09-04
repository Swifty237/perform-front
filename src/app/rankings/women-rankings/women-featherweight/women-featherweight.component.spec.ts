import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenFeatherweightComponent } from './women-featherweight.component';

describe('WomenFeatherweightComponent', () => {
  let component: WomenFeatherweightComponent;
  let fixture: ComponentFixture<WomenFeatherweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenFeatherweightComponent]
    });
    fixture = TestBed.createComponent(WomenFeatherweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
