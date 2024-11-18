import { Component } from '@angular/core';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-resumo-pagamento',
  templateUrl: './resumo-pagamento.component.html',
  styleUrls: ['./resumo-pagamento.component.css']
})
export class ResumoPagamentoComponent {
  constructor(private _service: PagamentoService) { }
  get service() {
    return this._service;
  }
}
