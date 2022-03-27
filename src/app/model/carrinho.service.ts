import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinho:any[];

  constructor() {
    this.carrinho = [];
  }
  obteTodos(){
    return this.carrinho;
  }
  getCarrinho(){
    return this.carrinho;
  }
  addCarrinho( nome: string,imagem:string, descricao: string, estoque: number, preco: number,promocao:boolean, categoria:string ){
    this.getCarrinho().push({nome, descricao,imagem, estoque, preco, promocao, categoria});

  }
  calcular(): number {
    return this.getCarrinho().map((carrinho) => carrinho.preco).reduce((x, y) => x + y, 0);
  }
}
