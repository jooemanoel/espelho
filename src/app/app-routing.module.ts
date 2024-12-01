import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { ParcelasComponent } from './pages/parcelas/parcelas.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';

const routes: Routes = [
  {
    path: 'pesquisa',
    component: PesquisaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'pagamento',
    component: PagamentoComponent
  },
  {
    path: 'parcelas',
    component: ParcelasComponent
  },
  {
    path: '**',
    redirectTo: 'pesquisa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
