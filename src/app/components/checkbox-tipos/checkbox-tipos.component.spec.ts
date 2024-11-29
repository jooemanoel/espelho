import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleService } from 'src/app/services/controle.service';
import { CheckboxTiposComponent } from './checkbox-tipos.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe(CheckboxTiposComponent.name, () => {
  let component: CheckboxTiposComponent;
  let fixture: ComponentFixture<CheckboxTiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [CheckboxTiposComponent],
      providers: [ControleService]
    });
    fixture = TestBed.createComponent(CheckboxTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`O service precisa ser válido`, () => {
    const aux = component.controle;
    expect(aux).toBeInstanceOf(ControleService);
  });

  it(`O service precisa alternar o produto para verdadeiro`, () => {
    component.controle.produtos = [];
    component.alternarProduto(true, 'Arroz');
    expect(component.controle.produtos).toHaveSize(1);
  });

  it(`O service precisa alternar o produto para falso`, () => {
    component.controle.produtos = ['Arroz'];
    component.alternarProduto(false, 'Arroz');
    expect(component.controle.produtos).toHaveSize(0);
  });
});
