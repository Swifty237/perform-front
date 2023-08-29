import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenRankingsComponent } from './men-rankings.component';

describe('MenRankingsComponent', () => {
  let component: MenRankingsComponent;
  let fixture: ComponentFixture<MenRankingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenRankingsComponent]
    });
    fixture = TestBed.createComponent(MenRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
