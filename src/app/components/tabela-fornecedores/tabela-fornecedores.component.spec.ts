import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaFornecedoresComponent } from './tabela-fornecedores.component';

describe('TabelaFornecedoresComponent', () => {
  let component: TabelaFornecedoresComponent;
  let fixture: ComponentFixture<TabelaFornecedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaFornecedoresComponent]
    });
    fixture = TestBed.createComponent(TabelaFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
