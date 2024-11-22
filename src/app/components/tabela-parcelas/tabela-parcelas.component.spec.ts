import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaParcelasComponent } from './tabela-parcelas.component';
import { AppModule } from 'src/app/app.module';

describe('TabelaParcelasComponent', () => {
  let component: TabelaParcelasComponent;
  let fixture: ComponentFixture<TabelaParcelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [TabelaParcelasComponent]
    });
    fixture = TestBed.createComponent(TabelaParcelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
