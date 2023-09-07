import { TestBed } from '@angular/core/testing';

import { RankingsByTakedownsService } from './rankings-by-takedowns.service';

describe('RankingsByTakedownsService', () => {
  let service: RankingsByTakedownsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByTakedownsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
