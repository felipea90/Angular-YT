import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit
{

  p1 = new Produto('PS5', 'sony@sony.com', 4699, 0.10, new Date('2020/05/02'));
  p2 = new Produto('PS5', 'sony@sony.com', 4699, 0.10, new Date('2020/05/02'));
  p3 = new Produto('PS5', 'sony@sony.com', 4699, 0.10, new Date('2020/05/02'));
  p4 = new Produto('PS5', 'sony@sony.com', 4699, 0.10, new Date('2020/05/02'));
  p5 = new Produto('PS5', 'sony@sony.com', 4699, 0.10, new Date('2020/05/02'));

  constructor()
  {

  }

  ngOnInit(): void
  {
  }

}
