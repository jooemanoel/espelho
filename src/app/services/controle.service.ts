import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { Cliente } from '../shared/models/interfaces/cliente';
import { Fornecedor } from '../shared/models/interfaces/fornecedor';
import { Produto } from '../shared/models/interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ControleService {
  private _cliente: Cliente = {
    nome: '',
    codigo: 0
  }
  get cliente() {
    return this._cliente;
  }
  set cliente(x: Cliente) {
    this._cliente = x;
  }
  private _produtos = signal<Produto[]>([]);
  get produtos() {
    return this._produtos();
  }
  set produtos(x: Produto[]) {
    this._produtos.set(x);
  }
  private _fornecedor: Fornecedor | null = null;
  get fornecedor() {
    return this._fornecedor;
  }
  set fornecedor(x: Fornecedor | null) {
    this._fornecedor = x;
  }
  private _emissor = new Subject<string>();
  get emissor() {
    return this._emissor;
  }
}
