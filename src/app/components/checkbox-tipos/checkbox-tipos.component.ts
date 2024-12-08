import { Component, effect, OnInit } from '@angular/core';
import { ControleService } from 'src/app/services/controle.service';
import { LISTA_PRODUTOS, Produto } from 'src/app/shared/models/interfaces/produto';

@Component({
  selector: 'app-checkbox-tipos',
  templateUrl: './checkbox-tipos.component.html',
  styleUrls: ['./checkbox-tipos.component.css']
})
export class CheckboxTiposComponent implements OnInit {
  listaProdutos: Produto[] = [];
  produtosEfeito = effect(() => {
    const produtos = this._controle.produtos;
    if (!produtos.length || !produtos.every(p => this._controle.fornecedor?.produtos.some(x => x === p)))
      this._controle.fornecedor = null;
  });
  constructor(private _controle: ControleService) { }
  ngOnInit(): void {
    this.listaProdutos = LISTA_PRODUTOS;
  }
  checarProduto(produto: Produto) {
    return this._controle.produtos.some(x => x === produto);
  }
  alternarProduto(checked: boolean, produto: Produto) {
    this._controle.produtos = checked
      ? [...this._controle.produtos, produto]
      : this._controle.produtos.filter(x => x !== produto);
  }
}
