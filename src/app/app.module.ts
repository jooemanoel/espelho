import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CheckboxTiposComponent } from './components/checkbox-tipos/checkbox-tipos.component';
import { TabelaFornecedoresComponent } from './components/tabela-fornecedores/tabela-fornecedores.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormPagamentoComponent } from './components/form-pagamento/form-pagamento.component';
import { TabelaParcelasComponent } from './components/tabela-parcelas/tabela-parcelas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ParcelasComponent } from './pages/parcelas/parcelas.component';
import { FormParcelasComponent } from './components/form-parcelas/form-parcelas.component';
import { ResumoPagamentoComponent } from './components/resumo-pagamento/resumo-pagamento.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { InfoClienteComponent } from './components/info-cliente/info-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { MascaraMonetariaDirective } from './diretivas/mascara-monetaria.directive';
import { PercentualDirective } from './diretivas/percentual.directive';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PagamentoComponent,
    CabecalhoComponent,
    CheckboxTiposComponent,
    TabelaFornecedoresComponent,
    FormPagamentoComponent,
    TabelaParcelasComponent,
    ParcelasComponent,
    FormParcelasComponent,
    ResumoPagamentoComponent,
    PesquisaComponent,
    InfoClienteComponent,
    DialogoComponent,
    MascaraMonetariaDirective,
    PercentualDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
