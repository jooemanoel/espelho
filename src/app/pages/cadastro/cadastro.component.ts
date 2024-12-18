import { Component } from '@angular/core';
import { ControleService } from 'src/app/services/controle.service';
import { Fornecedor } from 'src/app/shared/models/interfaces/fornecedor';
import { Produto } from 'src/app/shared/models/interfaces/produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  produtos: Produto[] = this._controle.produtos;
  fornecedor: Fornecedor | null = this._controle.fornecedor;
  constructor(private _controle: ControleService) { }
  alternarProduto(x: { checked: boolean, produto: Produto }) {
    this.produtos = x.checked
      ? [...this.produtos, x.produto]
      : this.produtos.filter(p => p.codigo !== x.produto.codigo);
    if (!this.produtos.length || !this.produtos.every(p => this.fornecedor?.produtos.some(x => x === p)))
      this.fornecedor = null;
    console.log(this.produtos);
  }
  alternarFornecedor(value: Fornecedor) {
    this.fornecedor = value;
  }
}
