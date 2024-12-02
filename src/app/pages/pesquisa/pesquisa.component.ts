import { Component, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ControleService } from 'src/app/services/controle.service';
import { Cliente } from 'src/app/shared/models/interfaces/cliente';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {
  clienteAtual = toSignal(this._service.getClienteAtual());
  ClienteAtualEf = effect(() => {
    if (this._controle.cliente.codigo) return;
    try {
      const x = this.clienteAtual();
      console.log('Efeito acionado com:', x);
      if (x) this.processarCliente(x);
    }
    catch (erro) {
      console.log('Erro capturado no efeito:', erro);
      this.mostrarErro(erro);
    }
  });
  clienteAlterado = toSignal(this._service.detectarClienteAlterado());
  clienteAlteradoEf = effect(() => {
    const x = this.clienteAlterado();
    if (x) this.processarCliente(x);
  });
  constructor(private _router: Router, private _service: ClienteService, private _controle: ControleService) { }
  processarCliente(cliente: Cliente) {
    this._controle.cliente = cliente;
    this.avancar();
  }
  mostrarErro(erro: unknown) {
    console.log('Funcao chamada', erro);
  }
  buscar() {
    this._service.chamarProximoCliente();
  }
  avancar() {
    this._router.navigateByUrl('cadastro');
  }
}
