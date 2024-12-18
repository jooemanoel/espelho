import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LISTA_PRODUTOS, Produto } from 'src/app/shared/models/interfaces/produto';

@Component({
  selector: 'app-checkbox-tipos',
  templateUrl: './checkbox-tipos.component.html',
  styleUrls: ['./checkbox-tipos.component.css']
})
export class CheckboxTiposComponent implements OnInit {
  @Input() produtos: Produto[] = [];
  @Output() alternar = new EventEmitter<{ checked: boolean, produto: Produto }>();
  listaProdutos: Produto[] = [];
  ngOnInit(): void {
    this.listaProdutos = LISTA_PRODUTOS;
  }
  checarProduto(produto: Produto) {
    return this.produtos.some(x => x.codigo === produto.codigo);
  }
  alternarProduto(checked: boolean, produto: Produto) {
    this.alternar.emit({ checked, produto });
  }
}