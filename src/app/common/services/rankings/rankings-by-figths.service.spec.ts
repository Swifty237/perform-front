import { TestBed } from '@angular/core/testing';

import { RankingsByFigthsService } from './rankings-by-figths.service';

describe('RankingsByFigthsService', () => {
  let service: RankingsByFigthsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsByFigthsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
