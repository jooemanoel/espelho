import { AfterViewInit, Component, effect, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ControleService } from 'src/app/services/controle.service';
import { Fornecedor, LISTA_FORNECEDORES } from 'src/app/shared/models/interfaces/fornecedor';

@Component({
  selector: 'app-tabela-fornecedores',
  templateUrl: './tabela-fornecedores.component.html',
  styleUrls: ['./tabela-fornecedores.component.css']
})
export class TabelaFornecedoresComponent implements OnInit, AfterViewInit {
  colunas: string[] = ['radio', 'nome', 'codigo'];
  dataSource = new MatTableDataSource<Fornecedor>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _controle: ControleService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {
    this.dataSource.data = LISTA_FORNECEDORES;
    this.dataSource.filterPredicate = (data: Fornecedor, filter: string) => {
      const produtos = filter.split(',');
      return produtos.every(produto => data.produtos.some(x => x === produto));
    };
    effect(() => {
      this.dataSource.filter = this._controle.produtos.join(',');
      this.filtrar();
    });
  }
  ngOnInit(): void {
    this.controle.emissor.subscribe(event => console.log(event, 'recebi pela tabela'));
  }
  get controle() {
    return this._controle;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  filtrar() {
    const aux = this.dataSource.filteredData.find(x => x.codigo === this._controle.fornecedor);
    if (!aux || !this._controle.produtos.every(produto => aux.produtos.some(x => x === produto)))
      this._controle.fornecedor = 0;
  }
  mudarFornecedor(value: number) {
    this._controle.fornecedor = value;
  }
  avancar() {
    if (!this._controle.fornecedor) {
      this._snackBar.open('Fornecedor não selecionado!', 'OK');
      return;
    }
    void this._router.navigateByUrl('pagamento');
  }
  enviar() {
    this.controle.emissor.next('Enviei pela tabela');
  }
}
