import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClienteComponent } from './info-cliente.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('InfoClienteComponent', () => {
  let component: InfoClienteComponent;
  let fixture: ComponentFixture<InfoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [InfoClienteComponent]
    });
    fixture = TestBed.createComponent(InfoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
