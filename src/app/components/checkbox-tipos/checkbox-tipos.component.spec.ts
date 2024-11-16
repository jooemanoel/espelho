import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTiposComponent } from './checkbox-tipos.component';

describe('CheckboxTiposComponent', () => {
  let component: CheckboxTiposComponent;
  let fixture: ComponentFixture<CheckboxTiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxTiposComponent]
    });
    fixture = TestBed.createComponent(CheckboxTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
