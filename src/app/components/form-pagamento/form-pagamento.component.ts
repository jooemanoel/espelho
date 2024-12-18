import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-form-pagamento',
  templateUrl: './form-pagamento.component.html',
  styleUrls: ['./form-pagamento.component.css']
})
export class FormPagamentoComponent implements OnInit {
  @Input() ativo!: boolean;
  formPagamento = new FormGroup({
    valor: new FormControl<number | undefined>(
      undefined,
      [Validators.required.bind(this), Validators.min(0.01)]
    ),
    percentual: new FormControl<number | undefined>(
      undefined,
      [Validators.required.bind(this), Validators.min(0.01), Validators.max(100)]
    ),
    parcelado: new FormControl<boolean>(false),
    numParcelas: new FormControl<number>(
      2,
      [Validators.min(2), Validators.max(12)]
    ),
    data: new FormControl<Date>(new Date())
  });
  constructor(
    private _service: PagamentoService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { }
  ngOnInit(): void {
    this.ativo ? this.formPagamento.enable() : this.formPagamento.disable();
    if (!this._service.valor) return;
    this.formPagamento.patchValue({
      valor: this._service.valor,
      percentual: this._service.percentual,
      parcelado: this._service.parcelado,
      numParcelas: this._service.numParcelas
    });
    if (this._service.parcelas.length) {
      this.formPagamento.patchValue({
        data: this._service.parcelas[0].data
      });
    }
  }
  get valor() {
    return this.formPagamento.controls.valor.value ?? 0;
  }
  get percentual() {
    return this.formPagamento.controls.percentual.value ?? 0;
  }
  get comissao() {
    return (this.valor * this.percentual) / 100;
  }
  get parcelado() {
    return this.formPagamento.controls.parcelado.value ?? false;
  }
  get numParcelas() {
    return this.formPagamento.controls.numParcelas.value ?? 1;
  }
  get data() {
    return this.formPagamento.controls.data.value ?? new Date();
  }
  checarErros() {
    if (!this.formPagamento.controls.valor.valid) {
      this._snackBar.open('Informe o valor da compra!', 'OK');
      return true;
    }
    if (!this.formPagamento.controls.percentual.valid) {
      this._snackBar.open('Informe o percentual de comissão!', 'OK');
      return true;
    }
    if (this.formPagamento.controls.parcelado.value && !this.formPagamento.controls.numParcelas.valid) {
      this._snackBar.open('Informe uma quantidade válida de parcelas', 'OK');
      return true;
    }
    return false;
  }
  avancar() {
    if (this.checarErros()) return;
    this._service.pagamento.valor = this.valor;
    this._service.pagamento.percentual = this.percentual;
    this._service.pagamento.parcelado = this.parcelado;
    this._service.pagamento.numParcelas = this.numParcelas;
    this._service.pagamento.parcelas = this.parcelado ? [] : [{
      valor: this.valor,
      comissao: this.comissao,
      data: this.data
    }];
    void this._router.navigateByUrl('parcelas');
  }
  cancelar() {
    console.log('chamou');
  }
}
