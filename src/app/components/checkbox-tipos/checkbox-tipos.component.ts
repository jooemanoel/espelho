import { Component } from '@angular/core';
import { ControleService } from 'src/app/services/controle.service';
import { Produtos } from 'src/app/shared/models/enums/produtos';

@Component({
  selector: 'app-checkbox-tipos',
  templateUrl: './checkbox-tipos.component.html',
  styleUrls: ['./checkbox-tipos.component.css']
})
export class CheckboxTiposComponent {
  produtos = Produtos;
  constructor(private _controle: ControleService) { }
  get controle() {
    return this._controle;
  }
  checarProduto(produto: string) {
    return this._controle.produtos.some(x => x === produto);
  }
  alternarProduto(checked: boolean, produto: string) {
    this._controle.produtos = checked
      ? [...this._controle.produtos, produto]
      : this._controle.produtos.filter(x => x !== produto);
  }
}
