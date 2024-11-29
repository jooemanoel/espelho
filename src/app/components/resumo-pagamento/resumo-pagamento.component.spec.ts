import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { ResumoPagamentoComponent } from './resumo-pagamento.component';

describe('ResumoPagamentoComponent', () => {
  let component: ResumoPagamentoComponent;
  let fixture: ComponentFixture<ResumoPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [ResumoPagamentoComponent],
      providers: [PagamentoService]
    });
    fixture = TestBed.createComponent(ResumoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
