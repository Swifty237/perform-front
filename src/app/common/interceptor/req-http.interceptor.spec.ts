import { TestBed } from '@angular/core/testing';

import { ReqHttpInterceptor } from './req-http.interceptor';

describe('ReqHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ReqHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ReqHttpInterceptor = TestBed.inject(ReqHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
