import { Injectable } from '@angular/core';
import { Produtos } from './produtos';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinho:any = [];
  preco:number = 0;

  constructor() {}

  obteTodos(){
    return this.carrinho;
  }
  getCarrinho(){
    return this.carrinho;
  }

  addCarrinho( nome: string,imagem:string, descricao: string, estoque: number, preco: number,promocao:boolean, categoria:string ){
    this.getCarrinho().push({nome, descricao,imagem, estoque, preco, promocao, categoria});
  }

 // verificar
  calcular(): number {
  return this.getCarrinho().map((carrinho)=> carrinho.preco).reduce((acc,amount)=> acc + amount, 0);
  }
  remover(index: number):boolean{
    if(index != null){
      this.carrinho.splice(index, 1);
      return true;
    }
    return false;

  }
}
