import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CadastrarpetComponent } from './pages/cadastrarpet/cadastrarpet.component';
import { CadastrarloginComponent } from './pages/cadastrarlogin/cadastrarlogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cadastro/login", component:CadastrarloginComponent },
  { path: "cadastrar/pet", component: CadastrarpetComponent },
  { path: "perfil/:id", component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
