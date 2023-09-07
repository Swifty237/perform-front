import { TestBed } from '@angular/core/testing';

import { RankingsBySubmissionswinsService } from './rankings-by-submissionswins.service';

describe('RankingsBySubmissionswinsService', () => {
  let service: RankingsBySubmissionswinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsBySubmissionswinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
