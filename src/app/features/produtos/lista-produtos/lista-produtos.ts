import { Component} from '@angular/core';
import { Produto } from '../produto/produto';
import {signal} from '@angular/core';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import {effect} from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe,UpperCasePipe],
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
      this.produtoSelecionado.set(nome);
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
  total + item.preco,0)});
  //!função para substituir a lista atual usando o metod set()
  substituirProdutos(){
    this.produtos.set([
      {nome:'teclado', preco: 50 },
      {nome:'mouse', preco: 15 },
      {nome:'monitor', preco: 500 },
      {nome:'desktop', preco: 1500 },
      {nome:'headset', preco: 30 },
    ]);
  }
  //!metodo para monitorar alterações em tempo real usando metodo effect
  constructor(){
    effect(() => {
      console.log('lista de Produtos alterados: ', this.produtos());
    });
    effect(() => {
      console.log('Valor total atualizado: ', this.valorTotal());
    });
    effect(() => {
      if (typeof document !== 'undefined'){
        document.title = `(${this.totalProdutos()}) - loja do arthurzinho gamaplayes`; 
      }
    });
  }
  //!metodo para criar um estado de seleção com signal string | null
  produtoSelecionado = signal <string | null>(null);
}
