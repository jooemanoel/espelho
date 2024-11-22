import { TestBed } from '@angular/core/testing';

import { ControleService } from './controle.service';

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
    service.produtos = ['Arroz', 'Feijão'];
    expect(service.produtos).toContain('Arroz');
  });
});
