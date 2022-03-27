
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntradaComponent } from './entrada/entrada.component';
const routes: Routes = [
{ path:'', component: EntradaComponent},
{ path:'carrinho',component: CarrinhoComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
