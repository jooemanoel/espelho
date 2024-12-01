import { Component, OnInit } from '@angular/core';
import { ControleService } from 'src/app/services/controle.service';
import { LISTA_PRODUTOS, Produto } from 'src/app/shared/models/interfaces/produto';

@Component({
  selector: 'app-checkbox-tipos',
  templateUrl: './checkbox-tipos.component.html',
  styleUrls: ['./checkbox-tipos.component.css']
})
export class CheckboxTiposComponent implements OnInit {
  listaProdutos: Produto[] = [];
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
