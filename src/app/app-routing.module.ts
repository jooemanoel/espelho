import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { ParcelasComponent } from './pages/parcelas/parcelas.component';

const routes: Routes = [
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
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
