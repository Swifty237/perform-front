import { TestBed } from '@angular/core/testing';

import { RankingsByTakedowndefenseService } from './rankings-by-takedowndefense.service';

describe('RankingsByTakedowndefenseService', () => {
  let service: RankingsByTakedowndefenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByTakedowndefenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
