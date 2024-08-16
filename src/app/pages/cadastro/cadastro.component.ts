import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { senhasCoincidemValidator } from '../../directives/senhas-coincidem.directive';

@Component({
	selector: 'app-cadastro',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './cadastro.component.html',
	styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
	private formBuilder: FormBuilder = inject(FormBuilder);
	private usuarioService: UsuarioService = inject(UsuarioService);
	ocultaSenha: boolean = true;
	ocultaConfirmacaoSenha: boolean = true;
	classeFormularioValidado: boolean = false;

	// Controle do formulário
	cadastroForm = this.formBuilder.group({
		nome: ["", Validators.required],
		sobrenome: ["", Validators.required],
		email: ["", Validators.required],
		username: ["", Validators.required],
		senha: ["", Validators.required],
		confirmaSenha: ["", Validators.required]
	}, { validators: senhasCoincidemValidator});

	get nome(): string | undefined | null { return this.cadastroForm.controls.nome.value; }
	get sobrenome(): string | undefined | null { return this.cadastroForm.controls.sobrenome.value; }
	get email(): string | undefined | null { return this.cadastroForm.controls.email.value; }
	get username(): string | undefined | null { return this.cadastroForm.controls.username.value; }
	get senha(): string | undefined | null { return this.cadastroForm.controls.senha.value; }
	get confirmaSenha(): string | undefined | null { return this.cadastroForm.controls.confirmaSenha.value; }

	alteraVisibilidadeSenha() {
		this.ocultaSenha = !this.ocultaSenha;
	}

	alteraVisibilidadeConfirmacaoSenha() {
		this.ocultaConfirmacaoSenha = !this.ocultaConfirmacaoSenha;
	}

	submitCadastro() {
		this.classeFormularioValidado = true;
		console.log(this.cadastroForm.controls.confirmaSenha.hasError('teste'));
		console.log(this.cadastroForm.controls.confirmaSenha.hasError('senhasCoincidem'));
		console.log(this.cadastroForm.controls.confirmaSenha.hasError("senhasCoincidem"));
		// console.log(`nome: ${this.nome}`);
		// console.log(`sobrenome: ${this.sobrenome}`);
		// console.log(`email: ${this.email}`);
		// console.log(`username: ${this.username}`);
		// console.log(`senha: ${this.senha}`);
		// console.log(`confirmaSenha: ${this.confirmaSenha}`);
	}
}
