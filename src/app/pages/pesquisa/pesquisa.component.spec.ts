import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/shared/models/interfaces/cliente';
import { PesquisaComponent } from './pesquisa.component';

describe('PesquisaComponent', () => {
  let component: PesquisaComponent;
  let fixture: ComponentFixture<PesquisaComponent>;
  const clienteAlterado = new Subject<Cliente>();
  const serviceMock = jasmine.createSpyObj('ClienteService', [], {
    getClienteAtual: () => of({
      nome: 'Joao',
      codigo: 123
    }),
    detectarClienteAlterado: () => clienteAlterado.asObservable()
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [PesquisaComponent],
      providers: [
        { provide: ClienteService, useValue: serviceMock }
      ]
    });
  });
  it('Simular erro no service', () => {
    const errorMock = jasmine.createSpyObj('ClienteService', [], {
      getClienteAtual: () => throwError(() => new Error('Erro simulado')),
      detectarClienteAlterado: () => clienteAlterado.asObservable()
    });
    TestBed.overrideProvider(ClienteService, { useValue: errorMock });
    fixture = TestBed.createComponent(PesquisaComponent);
    component = fixture.componentInstance;
    spyOn(component, 'mostrarErro').and.callThrough();
    fixture.detectChanges();
    expect(component.mostrarErro).toHaveBeenCalled();
  });
  it('`Service normal`', () => {
    fixture = TestBed.createComponent(PesquisaComponent);
    component = fixture.componentInstance;
    spyOn(component, 'mostrarErro').and.callThrough();
    fixture.detectChanges();
    expect(component.mostrarErro).not.toHaveBeenCalled();
  });
});
