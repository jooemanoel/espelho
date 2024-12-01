import { Component } from '@angular/core';
import { ControleService } from 'src/app/services/controle.service';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.css']
})
export class InfoClienteComponent {
  constructor(private _service: ControleService) { }
  get cliente() {
    return this._service.cliente;
  }
}
