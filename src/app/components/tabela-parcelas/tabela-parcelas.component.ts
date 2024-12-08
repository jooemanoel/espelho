import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  colunas: string[] = ['valor', 'comissao', 'data'];
  dataSource = new MatTableDataSource<Parcela>([]);
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
