import { PerfilComponent } from './pages/perfil/perfil.component';
import { CadastrarpetComponent } from './pages/cadastrarpet/cadastrarpet.component';
import { CadastrarloginComponent } from './pages/cadastrarlogin/cadastrarlogin.component';
import { LoginComponent } from './pages/login/login.component';
import { StartComponent } from './pages/start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: StartComponent },
  { path:"login", component: LoginComponent },
  { path: "cadastro/login", component:CadastrarloginComponent },
  { path: "cadastrar/pet", component: CadastrarpetComponent },
  { path: "perfil", component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
