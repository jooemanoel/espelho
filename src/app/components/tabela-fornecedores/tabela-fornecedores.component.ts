import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ControleService } from 'src/app/services/controle.service';
import { Fornecedor, LISTA_FORNECEDORES } from 'src/app/shared/models/interfaces/fornecedor';
import { Produto } from 'src/app/shared/models/interfaces/produto';

@Component({
  selector: 'app-tabela-fornecedores',
  templateUrl: './tabela-fornecedores.component.html',
  styleUrls: ['./tabela-fornecedores.component.css']
})
export class TabelaFornecedoresComponent implements OnInit, AfterViewInit {
  @Input() set produtos(x: Produto[]) {
    this.dataSource.filter = JSON.stringify(x);
  }
  @Input() fornecedor: Fornecedor | null = null;
  @Output() alternar = new EventEmitter<Fornecedor>();
  colunas: string[] = ['radio', 'nome', 'codigo'];
  dataSource = new MatTableDataSource<Fornecedor>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _controle: ControleService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { }
  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: Fornecedor, filter: string) => {
      const produtos: Produto[] = JSON.parse(filter);
      return produtos.every(produto => data.produtos.some(x => x.codigo === produto.codigo));
    };
    this.dataSource.data = LISTA_FORNECEDORES;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  alternarFornecedor(x: Fornecedor) {
    this.alternar.emit(x);
  }
  avancar() {
    if (!this.fornecedor) {
      this._snackBar.open('Fornecedor não selecionado!', 'OK');
      return;
    }
    this._controle.produtos = JSON.parse(this.dataSource.filter);
    this._controle.fornecedor = this.fornecedor;
    void this._router.navigateByUrl('pagamento');
  }
}
