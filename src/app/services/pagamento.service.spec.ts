import { TestBed } from '@angular/core/testing';

import { PagamentoService } from './pagamento.service';

describe('PagamentoService', () => {
  let service: PagamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(`${PagamentoService.prototype.criarParcelaUnica.name} deve criar uma parcela válida`, () => {
    service.pagamento.valor = 1000;
    service.pagamento.numParcelas = 1;
    service.pagamento.percentual = 50;
    service.criarParcelaUnica(new Date());
    expect(service.parcelas).toHaveSize(1);
  });
});
