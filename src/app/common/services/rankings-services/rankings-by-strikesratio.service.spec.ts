import { TestBed } from '@angular/core/testing';

import { RankingsByStrikesratioService } from './rankings-by-strikesratio.service';

describe('RankingsByStrikesratioService', () => {
  let service: RankingsByStrikesratioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByStrikesratioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
