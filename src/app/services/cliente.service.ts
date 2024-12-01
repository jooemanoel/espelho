import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cliente } from '../shared/models/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private _clienteAlterado = new Subject<Cliente>();
  private _cliente1: Cliente = {
    nome: 'Joao',
    codigo: 123
  };
  private _cliente2: Cliente = {
    nome: 'Maria',
    codigo: 456
  };
  getClienteAtual() {
    return new Observable<Cliente>(observer => {
      observer.next(this._cliente1);
      // observer.error('Cliente nao encontrado');
      observer.complete();
    });
  }
  detectarClienteAlterado() {
    return this._clienteAlterado.asObservable();
  }
  chamarProximoCliente() {
    this._clienteAlterado.next(this._cliente2);
  }
}
