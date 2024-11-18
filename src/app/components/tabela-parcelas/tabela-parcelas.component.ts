import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ControleService } from 'src/app/services/controle.service';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { Parcela } from 'src/app/shared/models/interfaces/parcela';

@Component({
  selector: 'app-tabela-parcelas',
  templateUrl: './tabela-parcelas.component.html',
  styleUrls: ['./tabela-parcelas.component.css']
})
export class TabelaParcelasComponent implements AfterViewInit {
  colunas: string[] = ['valor', 'comissao', 'data'];
  dataSource = new MatTableDataSource<Parcela>([]);
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _controle: ControleService,
    private _service: PagamentoService
  ) {
    this.dataSource.data = this._service.parcelas;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
