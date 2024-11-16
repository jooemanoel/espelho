import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pagamento } from 'src/app/shared/models/interfaces/pagamento';

@Component({
  selector: 'app-form-pagamento',
  templateUrl: './form-pagamento.component.html',
  styleUrls: ['./form-pagamento.component.css']
})
export class FormPagamentoComponent {
  pagamento: Pagamento = {
    valor: 0,
    percentual: 0,
    parcelado: false,
    numParcelas: 0,
    parcelas: []
  };
  data = new Date();
  constructor(private _snackBar: MatSnackBar) { }
  avancar() {
    if (!this.pagamento.valor) {
      this._snackBar.open('Informe o valor da compra!', 'OK');
      return;
    }
    if (!this.pagamento.percentual) {
      this._snackBar.open('Informe o percentual de comissão!', 'OK');
      return;
    }
    if (this.pagamento.parcelado && (this.pagamento.numParcelas < 2 || this.pagamento.numParcelas > 12)) {
      this._snackBar.open('Informe uma quantidade válida de parcelas', 'OK');
      return;
    }
    this._snackBar.open('Sucesso!', 'OK');
  }
}
