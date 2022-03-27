import { CarrinhoService } from './../model/carrinho.service';
import { Produtos } from './../model/produtos';
import { LojaService } from './../model/loja.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  produtos: Produtos[];
  constructor(private sr: LojaService, private sd: CarrinhoService) {
    this.produtos = [];
  }

  ngOnInit(): void {
    this.produtos = this.sr.obterProdutos();
  }
  adicionar(nome:string, imagem: string, descricao: string, estoque: number, preco:number,promocao:boolean, categoria: string){
    this.sd.addCarrinho(nome,imagem,descricao,estoque,preco,promocao,categoria);

  }
}
