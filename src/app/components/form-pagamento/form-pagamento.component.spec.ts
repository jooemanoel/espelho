import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPagamentoComponent } from './form-pagamento.component';
import { AppModule } from 'src/app/app.module';

describe('FormPagamentoComponent', () => {
  let component: FormPagamentoComponent;
  let fixture: ComponentFixture<FormPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [FormPagamentoComponent]
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
    component.pagamento.valor = 1000;
    component.avancar();
    const aux = component.checarErros();
    expect(aux).toBeTrue();
  });
  it(`${FormPagamentoComponent.prototype.checarErros.name} precisa retornar falso quando a quantidade de parcelas for inválida`, () => {
    component.pagamento.valor = 1000;
    component.pagamento.percentual = 50;
    component.pagamento.parcelado = true;
    component.pagamento.numParcelas = 1;
    component.avancar();
    const aux = component.checarErros();
    expect(aux).toBeTrue();
  });
  it(`${FormPagamentoComponent.prototype.checarErros.name} precisa retornar verdadeiro quando tudo estiver corretamente preenchido`, () => {
    component.pagamento.valor = 1000;
    component.pagamento.percentual = 50;
    component.pagamento.parcelado = true;
    component.pagamento.numParcelas = 2;
    component.avancar();
    const aux = component.checarErros();
    expect(aux).toBeFalse();
  });
  it(`${FormPagamentoComponent.prototype.checarErros.name} precisa retornar verdadeiro quando tudo estiver corretamente preenchido`, () => {
    component.pagamento.valor = 1000;
    component.pagamento.percentual = 50;
    component.pagamento.parcelado = false;
    component.avancar();
    const aux = component.pagamento.parcelas;
    expect(aux).toHaveSize(1);
  });
});
