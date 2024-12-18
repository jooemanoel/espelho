import { Injectable } from '@angular/core';
import { Pagamento } from '../shared/models/interfaces/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private _pagamento!: Pagamento;
  constructor() {
    this.inicializar();
  }
  get pagamento() {
    return this._pagamento;
  }
  get parcelas() {
    return this._pagamento.parcelas;
  }
  get valor() {
    return this._pagamento.valor;
  }
  get percentual() {
    return this._pagamento.percentual;
  }
  get comissao() {
    return (this.valor * this.percentual) / 100;
  }
  get parcelado() {
    return this._pagamento.parcelado;
  }
  get numParcelas() {
    return this._pagamento.numParcelas;
  }
  get valorParcelas() {
    return this._pagamento.parcelas.reduce((ac, x) => ac + x.valor, 0);
  }
  inicializar() {
    this._pagamento = {
      valor: 0,
      percentual: 0,
      parcelado: false,
      numParcelas: 2,
      parcelas: []
    };
  }
}
