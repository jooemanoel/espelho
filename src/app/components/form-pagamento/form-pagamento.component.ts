import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-form-pagamento',
  templateUrl: './form-pagamento.component.html',
  styleUrls: ['./form-pagamento.component.css']
})
export class FormPagamentoComponent {
  @Input() ativo!: boolean;
  data = new Date();
  constructor(private _service: PagamentoService, private _snackBar: MatSnackBar, private _router: Router) { }
  get pagamento() {
    return this._service.pagamento;
  }
  checarErros() {
    if (!this.pagamento.valor) {
      this._snackBar.open('Informe o valor da compra!', 'OK');
      return true;
    }
    if (!this.pagamento.percentual) {
      this._snackBar.open('Informe o percentual de comissão!', 'OK');
      return true;
    }
    if (this.pagamento.parcelado && (this.pagamento.numParcelas < 2 || this.pagamento.numParcelas > 12)) {
      this._snackBar.open('Informe uma quantidade válida de parcelas', 'OK');
      return true;
    }
    return false;
  }
  avancar() {
    if (this.checarErros())
      return;
    if (!this.pagamento.parcelado)
      this._service.criarParcelaUnica(this.data);
    void this._router.navigateByUrl('parcelas');
  }
}
