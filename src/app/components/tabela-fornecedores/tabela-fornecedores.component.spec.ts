import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { TabelaFornecedoresComponent } from './tabela-fornecedores.component';
import { Produtos } from 'src/app/shared/models/enums/produtos';
import { LISTA_FORNECEDORES } from 'src/app/shared/models/interfaces/fornecedor';

describe(TabelaFornecedoresComponent.name, () => {
  let component: TabelaFornecedoresComponent;
  let fixture: ComponentFixture<TabelaFornecedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [TabelaFornecedoresComponent]
    });
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
    component.mudarFornecedor(5);
    expect(component.controle.fornecedor).toEqual(5);
  });
  it(`${TabelaFornecedoresComponent.prototype.avancar.name} não deve avançar com fornecedor inválido`, () => {
    component.mudarFornecedor(0);
    component.avancar();
    expect(component.controle.fornecedor).toEqual(0);
  });
  it(`${TabelaFornecedoresComponent.prototype.avancar.name} deve avançar com fornecedor válido`, () => {
    component.mudarFornecedor(1);
    component.avancar();
    expect(component.controle.fornecedor).toEqual(1);
  });
  it(`${TabelaFornecedoresComponent.prototype.filtrar.name} deve apagar o fornecedor que não tem o produto`, () => {
    component.dataSource.data = LISTA_FORNECEDORES;
    component.mudarFornecedor(1);
    component.controle.produtos = [Produtos.p4];
    component.filtrar();
    expect(component.controle.fornecedor).toEqual(0);
  });
});
