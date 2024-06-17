import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IMensagemSaudacao } from '../pages/convidado/convidado.component';
import { environment } from '../../environments/environment';
import { IUsuario } from '../interfaces/Usuario/IUsuario';
import { IResultadoOperacao } from '../interfaces/IResultadoOperacao';
import { ISucessoCadastro } from '../interfaces/Usuario/ISucessoCadastro';
import { IErrorResponse } from '../interfaces/Response/IErrorResponse';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
	private httpClient: HttpClient = inject(HttpClient);
	private urlApi: string = environment.apiUrl;

	logar() {
	}

	deslogar() {
	}

	cadastrarUsuario(usuario: IUsuario): Observable<IResultadoOperacao> {
		return this.httpClient.post(`${this.urlApi}/usuario`, {
			email: usuario.email,
			username: usuario.username,
			nome: usuario.nome,
			senha: usuario.senha
		}, {observe: "response"}).pipe(
			map((response: HttpResponse<Object>): IResultadoOperacao => {
				if (response.status === 400)
					return {sucesso: false, data: "Há incoformidades nos valores de cadastro, favor verificar"};

				if (!response.ok)
					return {sucesso: false, data: (response.body as IErrorResponse).error}

				return {
					sucesso: true,
					data: (response.body as ISucessoCadastro).userId
				}
			})
		);
	}
	
	logarComoConvidado(): Observable<IMensagemSaudacao> {
		return this.httpClient.get<IMensagemSaudacao>(`${this.urlApi}/ola`);
	}

	teste(): Observable<any> {
		return this.httpClient.get(`${this.urlApi}/ola`, {observe: "response"});
	}

	// get obterUsuarioLogado(): string {
	// }

	// get obterIdUsuarioLogado(): string {
	// }

	// get obterTokenUsuarioLogado(): string {
	// }

	// get logado(): boolean {
	// }
}
