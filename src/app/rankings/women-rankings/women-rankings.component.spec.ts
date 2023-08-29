import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenRankingsComponent } from './women-rankings.component';

describe('WomenRankingsComponent', () => {
  let component: WomenRankingsComponent;
  let fixture: ComponentFixture<WomenRankingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenRankingsComponent]
    });
    fixture = TestBed.createComponent(WomenRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
