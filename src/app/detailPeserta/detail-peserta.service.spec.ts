import { TestBed } from '@angular/core/testing';

import { DetailPesertaService } from './detail-peserta.service';

describe('DetailPesertaService', () => {
  let service: DetailPesertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailPesertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
