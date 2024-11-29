import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { TabelaParcelasComponent } from './tabela-parcelas.component';

describe('TabelaParcelasComponent', () => {
  let component: TabelaParcelasComponent;
  let fixture: ComponentFixture<TabelaParcelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [TabelaParcelasComponent],
      providers: [PagamentoService]
    });
    fixture = TestBed.createComponent(TabelaParcelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
