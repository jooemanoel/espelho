import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormParcelasComponent } from './form-parcelas.component';

describe('FormParcelasComponent', () => {
  let component: FormParcelasComponent;
  let fixture: ComponentFixture<FormParcelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [FormParcelasComponent]
    });
    fixture = TestBed.createComponent(FormParcelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
