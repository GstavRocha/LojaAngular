import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HttpClientModule } from '@angular/common/http';
import { LojaService } from './model/loja.service';
import { CarrinhoService } from './model/carrinho.service';

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [LojaService, CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
