import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTiposComponent } from './checkbox-tipos.component';
import { AppModule } from 'src/app/app.module';
import { ControleService } from 'src/app/services/controle.service';

describe(CheckboxTiposComponent.name, () => {
  let component: CheckboxTiposComponent;
  let fixture: ComponentFixture<CheckboxTiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CheckboxTiposComponent]
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
