import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaComponent } from './pesquisa.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PesquisaComponent', () => {
  let component: PesquisaComponent;
  let fixture: ComponentFixture<PesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [PesquisaComponent]
    });
    fixture = TestBed.createComponent(PesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
