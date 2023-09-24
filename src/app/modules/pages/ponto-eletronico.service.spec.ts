import { TestBed } from '@angular/core/testing';

import { PontoEletronicoService } from './ponto-eletronico.service';

describe('PontoEletronicoService', () => {
  let service: PontoEletronicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PontoEletronicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
