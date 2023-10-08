import { TestBed } from '@angular/core/testing';

import { UfcEventsService } from './ufc-events.service';

describe('UfcEventsService', () => {
  let service: UfcEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfcEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
