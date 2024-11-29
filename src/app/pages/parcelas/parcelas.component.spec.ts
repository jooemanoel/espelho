import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { ParcelasComponent } from './parcelas.component';

describe('ParcelasComponent', () => {
  let component: ParcelasComponent;
  let fixture: ComponentFixture<ParcelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [ParcelasComponent],
      providers: [PagamentoService]
    });
    fixture = TestBed.createComponent(ParcelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
