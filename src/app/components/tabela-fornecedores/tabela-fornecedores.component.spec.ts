import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { ControleService } from 'src/app/services/controle.service';
import { Fornecedor } from 'src/app/shared/models/interfaces/fornecedor';
import { LISTA_PRODUTOS } from 'src/app/shared/models/interfaces/produto';
import { TabelaFornecedoresComponent } from './tabela-fornecedores.component';

describe(TabelaFornecedoresComponent.name, () => {
  let component: TabelaFornecedoresComponent;
  let fixture: ComponentFixture<TabelaFornecedoresComponent>;
  let controleService: ControleService;

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
      declarations: [TabelaFornecedoresComponent],
      providers: [MatSnackBar, { provide: Router, useValue: routerMock }]
    });

    controleService = TestBed.inject(ControleService);

    fixture = TestBed.createComponent(TabelaFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`O filtro deve ser chamado`, () => {
    const aux = component.dataSource.filterPredicate;
    component.dataSource.filter = '[]';
    expect(aux).toBeTruthy();
  });
  it(`O filtro deve ser chamado`, () => {
    component.mudarFornecedor(mockFornecedor1);
    expect(controleService.fornecedor).toEqual(mockFornecedor1);
  });
  it(`${TabelaFornecedoresComponent.prototype.avancar.name} não deve avançar com fornecedor inválido`, () => {
    controleService.fornecedor = null;
    component.avancar();
    expect(controleService.fornecedor).toEqual(null);
  });
  it(`${TabelaFornecedoresComponent.prototype.avancar.name} deve avançar com fornecedor válido`, () => {
    component.mudarFornecedor(mockFornecedor1);
    component.avancar();
    expect(controleService.fornecedor).toEqual(mockFornecedor1);
  });
  it(`${TabelaFornecedoresComponent.prototype.checarFornecedor.name} deve apagar o fornecedor que não tem o produto`, () => {
    component.mudarFornecedor(mockFornecedor1);
    controleService.produtos = [LISTA_PRODUTOS[3]];
    component.checarFornecedor();
    expect(controleService.fornecedor).toEqual(null);
  });
  it(`L23: O effect deve chamar a função para apagar o fornecedor que não tem o produto`, () => {
    component.mudarFornecedor(mockFornecedor1);
    controleService.produtos = [LISTA_PRODUTOS[3]];
    fixture.detectChanges();
    expect(controleService.fornecedor).toEqual(null);
  });
});

const mockFornecedor1: Fornecedor = {
  nome: 'João',
  codigo: 1,
  produtos: [LISTA_PRODUTOS[0], LISTA_PRODUTOS[1]]
}