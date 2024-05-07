import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-convidado',
	standalone: true,
	imports: [CommonModule],
	template: `
		<ng-container *ngIf="mensagemObject | async as mensagemObject">
			<div class="position-absolute top-0 start-50 translate-middle-x mt-5">
				<div
					class="card border border border-secondary border border-black border-4"
					style="--bs-border-opacity: .5;"
				>
					<div class="card-body px-5">
						<p class="card-text text-center text-white fs-1 fw-bold" style="--bs-text-opacity: .81;"> {{ mensagemObject.mensagem }} </p>
					</div>
				</div>
			</div>
		</ng-container>
	`,
	styleUrl: './convidado.component.scss'
})
export class ConvidadoComponent {
	usuarioService: UsuarioService = inject(UsuarioService);
	mensagemObject: Observable<IMensagemSaudacao>;

	constructor() {
		this.mensagemObject = this.usuarioService.logarComoConvidado();
	}
}
export interface IMensagemSaudacao {
	mensagem: string;
}
