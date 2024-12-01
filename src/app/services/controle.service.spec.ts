import { TestBed } from '@angular/core/testing';

import { ControleService } from './controle.service';
import { LISTA_PRODUTOS } from '../shared/models/interfaces/produto';

describe(ControleService.name, () => {
  let service: ControleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(`Produtos deve receber valores corretamente`, () => {
    service.produtos = [LISTA_PRODUTOS[0], LISTA_PRODUTOS[1]];
    expect(service.produtos).toContain(LISTA_PRODUTOS[0]);
  });
});
