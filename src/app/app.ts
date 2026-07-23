import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
//import {Produto} from './components/produto/produto';//importando a classe produto do arquivo produto.ts para ser usado no componente app.ts
import { UpperCasePipe } from '@angular/common';
import { usuarioLogado,login, logout } from './core/auth';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'mercado bandido';
  usuarioLogado = usuarioLogado;
  login = login;
  logout = logout;
}
