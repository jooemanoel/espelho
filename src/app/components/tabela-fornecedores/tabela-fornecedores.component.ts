import { AfterViewInit, Component, effect, OnInit, ViewChild } from '@angular/core';
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
  colunas: string[] = ['radio', 'nome', 'codigo'];
  dataSource = new MatTableDataSource<Fornecedor>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  produtosSelecionados = effect(() => {
    const produtos = this._controle.produtos;
    this.dataSource.filter = JSON.stringify(produtos);
  });
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
  get controle() {
    return this._controle;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  mudarFornecedor(value: Fornecedor) {
    this._controle.fornecedor = value;
  }
  avancar() {
    if (!this._controle.fornecedor) {
      this._snackBar.open('Fornecedor não selecionado!', 'OK');
      return;
    }
    void this._router.navigateByUrl('pagamento');
  }
}
