import { TestBed } from '@angular/core/testing';

import { LombaService } from './lomba.service';

describe('LombaService', () => {
  let service: LombaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LombaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
