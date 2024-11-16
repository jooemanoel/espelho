import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaParcelasComponent } from './tabela-parcelas.component';

describe('TabelaParcelasComponent', () => {
  let component: TabelaParcelasComponent;
  let fixture: ComponentFixture<TabelaParcelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
