import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoPagamentoComponent } from './resumo-pagamento.component';
import { AppModule } from 'src/app/app.module';

describe('ResumoPagamentoComponent', () => {
  let component: ResumoPagamentoComponent;
  let fixture: ComponentFixture<ResumoPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ResumoPagamentoComponent]
    });
    fixture = TestBed.createComponent(ResumoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
