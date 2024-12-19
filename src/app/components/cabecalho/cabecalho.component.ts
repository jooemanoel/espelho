import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  @Input() titulo = 'Testes';
  @Input() rota = '';
  constructor(public dialog: MatDialog, private _router: Router) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogoComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        void this._router.navigateByUrl('');
      }
    });
  }
}
