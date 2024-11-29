import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { FormPagamentoComponent } from './form-pagamento.component';
import { Subject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormPagamentoComponent', () => {
  let component: FormPagamentoComponent;
  let fixture: ComponentFixture<FormPagamentoComponent>;

  const routerEvents = new Subject<NavigationEnd>();
  const routerMock = {
    events: routerEvents.asObservable(),
    navigateByUrl: jasmine.createSpy('navigateByUrl').and.returnValue(Promise.resolve(true)),
    routerState: { root: {} }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [FormPagamentoComponent],
      providers: [PagamentoService, MatSnackBar, { provide: Router, useValue: routerMock }]
    });
    fixture = TestBed.createComponent(FormPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`${FormPagamentoComponent.prototype.checarErros.name} precisa retornar falso quando o valor do contrato for falso`, () => {
    component.avancar();
    const aux = component.checarErros();
    expect(aux).toBeTrue();
  });
  it(`${FormPagamentoComponent.prototype.checarErros.name} precisa retornar falso quando o percentual de comissão for falso`, () => {
    component.formPagamento.controls.valor.setValue(1000);
    component.avancar();
    const aux = component.checarErros();
    expect(aux).toBeTrue();
  });
  it(`${FormPagamentoComponent.prototype.checarErros.name} precisa retornar falso quando a quantidade de parcelas for inválida`, () => {
    component.formPagamento.controls.valor.setValue(1000);
    component.formPagamento.controls.percentual.setValue(50);
    component.formPagamento.controls.parcelado.setValue(true);
    component.formPagamento.controls.numParcelas.setValue(1);
    component.avancar();
    const aux = component.checarErros();
    expect(aux).toBeTrue();
  });
});
