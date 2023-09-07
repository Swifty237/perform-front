import { TestBed } from '@angular/core/testing';

import { RankingsByStrikesService } from './rankings-by-strikes.service';

describe('RankingsByStrikesService', () => {
  let service: RankingsByStrikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByStrikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
