import { Injectable } from '@angular/core';
import { Pagamento } from '../shared/models/interfaces/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private _pagamento!: Pagamento;
  get pagamento() {
    return this._pagamento;
  }
  get valor() {
    return this._pagamento.valor;
  }
  get comissao() {
    return (this._pagamento.valor * this._pagamento.percentual) / 100;
  }
  get parcelas() {
    return this._pagamento.parcelas;
  }
  constructor() {
    this.inicializar();
  }
  inicializar() {
    this._pagamento = {
      valor: 0,
      percentual: 0,
      parcelado: false,
      numParcelas: 0,
      parcelas: []
    };
  }
  criarParcelaUnica(input: Date) {
    this._pagamento.parcelas = [{
      valor: this.valor,
      comissao: this.comissao,
      data: input
    }];
  }
}
