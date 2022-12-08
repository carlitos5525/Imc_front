import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './components/pages/usuario/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  {
    path: "pages/usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
