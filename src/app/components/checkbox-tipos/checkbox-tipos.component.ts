import { Component, OnInit } from '@angular/core';
import { ControleService } from 'src/app/services/controle.service';
import { Produtos } from 'src/app/shared/models/enums/produtos';

@Component({
  selector: 'app-checkbox-tipos',
  templateUrl: './checkbox-tipos.component.html',
  styleUrls: ['./checkbox-tipos.component.css']
})
export class CheckboxTiposComponent implements OnInit {
  produtos = Produtos;
  constructor(private _controle: ControleService) { }
  ngOnInit(): void {
    this.controle.emissor.subscribe(event => console.log(event, 'recebi pelo checkbox'));
  }
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
  enviar() {
    this.controle.emissor.next('Enviei pelo checkbox');
  }
}
