import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConvidadoComponent } from './pages/convidado/convidado.component';
import { CadastroZorroComponent } from './pages/cadastro-zorro/cadastro-zorro.component';

export const routes: Routes = [
    { path: "", component: LoginComponent, title: "Login" },
    { path: "cadastro", component: CadastroComponent, title: "Cadastro" },
    { path: "cadastro-teste", component: CadastroZorroComponent, title: "Cadastro Teste"},
    { path: "convidado", component: ConvidadoComponent, title: "Cadastro" },
];
