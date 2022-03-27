import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntradaComponent } from './entrada/entrada.component';

const rotas: Routes = [
  {
    path: '',
    component: EntradaComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
