import { CarrinhoService } from './../model/carrinho.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho: any [];
  preco: number;

  constructor(private sd: CarrinhoService) {
    this.carrinho = [];
    this.preco = 1;


  }
  ngOnInit():void{
    this.carrinho = this.sd.obteTodos();
    this.preco = this.sd.calcular();

  }

}
