import { TestBed } from '@angular/core/testing';

import { RankingsByIpsgService } from './rankings-by-ipsg.service';

describe('RankingsByIpsgService', () => {
  let service: RankingsByIpsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByIpsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
