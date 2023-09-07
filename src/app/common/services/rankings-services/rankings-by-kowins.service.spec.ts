import { TestBed } from '@angular/core/testing';

import { RankingsByKowinsService } from './rankings-by-kowins.service';

describe('RankingsByKowinsService', () => {
  let service: RankingsByKowinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByKowinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
