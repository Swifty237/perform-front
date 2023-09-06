import { TestBed } from '@angular/core/testing';

import { RankingsByVictoriesService } from './rankings-by-victories.service';

describe('RankingsByVictoriesService', () => {
  let service: RankingsByVictoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByVictoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
