import { TestBed } from '@angular/core/testing';

import { EditpanitiaService } from './editpanitia.service';

describe('EditpanitiaService', () => {
  let service: EditpanitiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditpanitiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
