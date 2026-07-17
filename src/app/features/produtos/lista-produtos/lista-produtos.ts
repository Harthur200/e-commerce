import { Component} from '@angular/core';
import { Produto } from '../produto/produto';
import {signal} from '@angular/core';
import { computed } from '@angular/core';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  //!Lista com dados - Array
  produtos = signal( [
    {nome: 'attack shark x11', preco: 200.99},
    {nome: 'monitor ultraggear', preco: 980.99},
    {nome: 'ssd sata 521gb', preco: 300}
  ]);
  //!Função para exibir produtos selecionados pelo o usuario no console
    exibirProduto(nome: string){
      console.log('Produto Selecionado: ', nome);
    }
    //!Função que adiciona produto usado metodo update
    adicionarProduto(){
      this.produtos.update(listaAtual => [
        ...listaAtual,
        {nome:"playstation 5", preco: 3000},
      ]);
    }
    //!Função que contabiliza a quantidade de produtos na lista
   totalProduto = computed(() => this.produtos(). length);
}

