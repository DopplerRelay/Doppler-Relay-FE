import { TestBed, inject } from '@angular/core/testing';

import { HttpProxyService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpProxyService]
    });
  });

  it('should be created', inject([HttpProxyService], (service: HttpProxyService) => {
    expect(service).toBeTruthy();
  }));
});
