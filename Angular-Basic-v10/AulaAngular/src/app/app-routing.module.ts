import { ContatoComponent } from './pagina/contato/contato.component';
import { ListaComponent } from './pagina/lista/lista.component';
import { HomeComponent } from './pagina/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
