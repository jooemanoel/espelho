import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControleService {
  private _produtos = signal<string[]>([]);
  get produtos() {
    return this._produtos();
  }
  set produtos(input: string[]) {
    this._produtos.set(input);
  }
  private _fornecedor = 0;
  get fornecedor() {
    return this._fornecedor;
  }
  set fornecedor(value: number) {
    this._fornecedor = value;
  }
}
