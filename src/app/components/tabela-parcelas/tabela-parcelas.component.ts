import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { Parcela } from 'src/app/shared/models/interfaces/parcela';

@Component({
  selector: 'app-tabela-parcelas',
  templateUrl: './tabela-parcelas.component.html',
  styleUrls: ['./tabela-parcelas.component.css']
})
export class TabelaParcelasComponent implements AfterViewInit {
  @Input() set parcelas(x: Parcela[]) {
    this.dataSource.data = x;
  }
  colunas: string[] = ['valor', 'comissao', 'data', 'acoes'];
  dataSource = new MatTableDataSource<Parcela>([]);
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _service: PagamentoService) { }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  removerParcela(element: Parcela) {
    this._service.pagamento.parcelas = this._service.pagamento.parcelas.filter(x => x !== element);
  }
}
