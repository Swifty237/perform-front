import { TestBed } from '@angular/core/testing';

import { RankingsByFightsService } from './rankings-by-fights.service';

describe('RankingsByFightsService', () => {
  let service: RankingsByFightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByFightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
