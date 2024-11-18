import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParcelasComponent } from './form-parcelas.component';

describe('FormParcelasComponent', () => {
  let component: FormParcelasComponent;
  let fixture: ComponentFixture<FormParcelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
