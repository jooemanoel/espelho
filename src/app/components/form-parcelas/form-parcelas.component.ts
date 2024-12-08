import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-form-parcelas',
  templateUrl: './form-parcelas.component.html',
  styleUrls: ['./form-parcelas.component.css']
})
export class FormParcelasComponent {
  @Output() nova = new EventEmitter();
  formParcela = new FormGroup({
    valor: new FormControl<number | undefined>(
      undefined,
      [Validators.required.bind(this), Validators.min(0.01)]
    ),
    data: new FormControl<Date>(new Date())
  });
  constructor(private _service: PagamentoService) { }
  get valor() {
    return this.formParcela.controls.valor.value ?? 0;
  }
  get comissao() {
    return (this.valor * this._service.percentual) / 100;
  }
  get data() {
    return this.formParcela.controls.data.value ?? new Date();
  }
  incluir() {
    this._service.pagamento.parcelas = [...this._service.parcelas, {
      valor: this.valor,
      comissao: this.comissao,
      data: this.data,
    }];
  }
}
