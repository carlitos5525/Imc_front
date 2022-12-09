import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarImcComponent } from './components/pages/imc/cadastrar-imc/cadastrar-imc.component';
import { EditarImcComponent } from './components/pages/imc/editar-imc/editar-imc.component';
import { ListarImcComponent } from './components/pages/imc/listar-imc/listar-imc.component';
import { CadastrarUsuarioComponent } from './components/pages/usuario/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  {
    path: "pages/usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "pages/imc/cadastrar",
    component: CadastrarImcComponent,
  },
  {
    path: "pages/imc/listar",
    component: ListarImcComponent,
  },
  {
    path: "pages/imc/editar/:id",
    component: EditarImcComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
