import { TestBed } from '@angular/core/testing';

import { DoSomethingService } from './do-something.service';

describe('DoSomethingService', () => {
  let service: DoSomethingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoSomethingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
