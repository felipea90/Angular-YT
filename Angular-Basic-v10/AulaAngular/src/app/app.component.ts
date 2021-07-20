import { Component } from '@angular/core';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  title = 'Aula Angular 10';
  nome = '';
  vetor = ['Tv', 'Psp', 'Ps5'];

  add()
  {
    let n = this.nome;
    console.log(n)
    this.vetor.push(n)
    this.nome=''
  }

  remove(x: any)
  {
    this.vetor.splice(x, 1)
    console.log()
  }
}
