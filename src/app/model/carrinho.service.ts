import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho:any[];

  constructor() {
    this.carrinho = [];
  }
  obteTodos(){
    return this.carrinho;
  }
  getCarrinho(){
    return this.carrinho;
  }
  addCarrinho( nome: string,imange:string, descricao: string, estoque: number, preco: number,promocao:boolean, categoria:string ){
    this.getCarrinho().push({nome, descricao, estoque, preco, promocao, categoria});

  }
  produtosCarrinho(): number{
    return this.getCarrinho().map((carrinho)=>carrinho.preco).reduce((adc, quant)=>adc + quant,0);
  }
}
