import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ControleService } from 'src/app/services/controle.service';
import { CheckboxTiposComponent } from './checkbox-tipos.component';
import { LISTA_PRODUTOS } from 'src/app/shared/models/interfaces/produto';

describe(CheckboxTiposComponent.name, () => {
  let component: CheckboxTiposComponent;
  let fixture: ComponentFixture<CheckboxTiposComponent>;
  let controleService: ControleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [CheckboxTiposComponent]
    });
    controleService = TestBed.inject(ControleService);
    fixture = TestBed.createComponent(CheckboxTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`O service precisa alternar o produto para verdadeiro`, () => {
    controleService.produtos = [];
    component.alternarProduto(true, LISTA_PRODUTOS[0]);
    expect(controleService.produtos).toHaveSize(1);
  });

  it(`O service precisa alternar o produto para falso`, () => {
    controleService.produtos = [LISTA_PRODUTOS[0]];
    component.alternarProduto(false, LISTA_PRODUTOS[0]);
    expect(controleService.produtos).toHaveSize(0);
  });

  it(`#${CheckboxTiposComponent.prototype.checarProduto.name}
    deve retornar verdadeiro quando o produto existir no service`, () => {
    controleService.produtos = [LISTA_PRODUTOS[0]];
    const x = component.checarProduto(LISTA_PRODUTOS[0]);
    expect(x).toBeTrue();
  });
});
