import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Produtos } from './produtos';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinho:any = [];
  preco:number = 0;
  custo: number = 0;

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
  filtrar(Produtos: Produto): number {
  return  this.custo =this.getCarrinho().filter(Produtos.preco);

  }
  calcular(Produtos: Produto):number {
    return Produtos.preco += this.custo;

  }
  remover(index: number):boolean{
    if(index != null){
      this.carrinho.splice(index, 1);
      return true;
    }
    return false;

  }
}
