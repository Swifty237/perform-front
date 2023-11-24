import { TestBed } from '@angular/core/testing';

import { OtherSpringService } from './other-spring.service';

describe('OtherSpringService', () => {
  let service: OtherSpringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherSpringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
