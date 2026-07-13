import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  produto = 'Notebook Gamer';
  preco = 1500;//!preco = preço
  mostrarProduto = true;
  mostrarPreco = true

}
