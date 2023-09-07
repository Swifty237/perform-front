import { TestBed } from '@angular/core/testing';

import { RankingsByTakedownsratioService } from './rankings-by-takedownsratio.service';

describe('RankingsByTakedownsratioService', () => {
  let service: RankingsByTakedownsratioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByTakedownsratioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
