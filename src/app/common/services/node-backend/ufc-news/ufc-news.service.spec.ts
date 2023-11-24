import { TestBed } from '@angular/core/testing';

import { UfcNewsService } from './ufc-news.service';

describe('UfcNewsService', () => {
  let service: UfcNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfcNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
