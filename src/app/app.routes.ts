import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConvidadoComponent } from './pages/convidado/convidado.component';

export const routes: Routes = [
    {path: "", component: LoginComponent, title: "Login"},
    {path: "cadastro", component: CadastroComponent, title: "Cadastro"},
    {path: "convidado", component: ConvidadoComponent, title: "Cadastro"}
];
