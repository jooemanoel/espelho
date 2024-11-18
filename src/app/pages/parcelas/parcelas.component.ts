import { Component } from '@angular/core';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-parcelas',
  templateUrl: './parcelas.component.html',
  styleUrls: ['./parcelas.component.css']
})
export class ParcelasComponent {
  constructor(private _service: PagamentoService) { }
  get pagamento() {
    return this._service.pagamento;
  }
}
