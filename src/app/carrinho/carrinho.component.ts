import { Component, OnInit } from '@angular/core';

import { CarrinhoService } from './../model/carrinho.service';
import { Produtos } from './../model/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho: any[];
  preco:number =0;

  constructor(private sd: CarrinhoService) {
    this.carrinho = [];


  }
  ngOnInit():void{
    this.carrinho = this.sd.obteTodos();
    this.preco = this.sd.calcular();

  }
  remover(index: number){
    this.sd.remover(index);
  }

}
