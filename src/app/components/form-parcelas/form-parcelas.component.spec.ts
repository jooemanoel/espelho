import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParcelasComponent } from './form-parcelas.component';
import { AppModule } from 'src/app/app.module';

describe('FormParcelasComponent', () => {
  let component: FormParcelasComponent;
  let fixture: ComponentFixture<FormParcelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
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
