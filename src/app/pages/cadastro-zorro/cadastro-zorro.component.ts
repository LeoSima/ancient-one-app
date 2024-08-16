import { Component, inject } from "@angular/core";
import { NzLibModule } from "../../shared/nz-lib/nz-lib.module";
import { Location } from "@angular/common";
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from "@angular/forms";

@Component({
	selector: "app-cadastro-zorro",
	standalone: true,
	imports: [NzLibModule],
	templateUrl: "./cadastro-zorro.component.html",
	styleUrl: "./cadastro-zorro.component.scss"
})
export class CadastroZorroComponent {
	private formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
	private location: Location = inject(Location);
	public exibeSenha: boolean = false;
	public exibeConfirmaSenha: boolean = false;

	cadastroForm: FormGroup<{
		nome: FormControl<string>,
		sobrenome: FormControl<string>,
		email: FormControl<string>,
		username: FormControl<string>,
		senha: FormControl<string>,
		confirmaSenha: FormControl<string>
	}>;

	constructor() {
		this.cadastroForm = this.formBuilder.group({
			nome: ["", Validators.required],
			sobrenome: ["", Validators.required],
			email: ["", [Validators.required, Validators.email]],
			username: ["", Validators.required],
			senha: ["", Validators.required],
			confirmaSenha: ["", [Validators.required, this.validarSenhasCoincidem]]
		});
	}

	validarSenhasCoincidem: ValidatorFn = (control: AbstractControl) => {
		if (control.value !== this.cadastroForm?.get("senha")?.value) {
			return { senhasCoincidem: true, error: true };
		}

		return {};
	}

	public voltar(): void {
		this.location.back();
	}

	public submitCadastro(): void {
		this.atualizaValidacaoCampos();
		console.log(this.cadastroForm);
		console.log(this.cadastroForm.value);
		console.log(this.cadastroForm.valid);
	}

	async atualizaValidacaoCampos(): Promise<void> {
		this.cadastroForm.markAllAsTouched();
		Object.keys(this.cadastroForm.controls).forEach(key => {
			this.cadastroForm.get(key)?.updateValueAndValidity();
		});
	}
}
