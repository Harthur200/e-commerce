import { Component} from '@angular/core';
import { Produto } from '../produto/produto';
import {signal} from '@angular/core';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
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
    //!Função que contabiliza a quantidade de produtos na lista com metodo computed()
   totalProdutos = computed(() => this.produtos(). length);
   //!função que calcula o valor total do produtos usando metodo computed()
   valorTotal = computed(() =>
  {return this.produtos().reduce((total, item) =>
  total + item.preco,0
  )}
  );
}
