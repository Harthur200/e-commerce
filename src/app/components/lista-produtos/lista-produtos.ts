import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    {nome: 'attack shark x11', preco: 200.99},
    {nome: 'monitor ultraggear', preco: 980.99},
    {nome: 'ssd sata 521gb', preco: 300}
  ];
}
