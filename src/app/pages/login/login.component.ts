import { Component, inject } from '@angular/core';
import { NzLibModule } from '../../shared/nz-lib/nz-lib.module';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-zorro',
	standalone: true,
	imports: [NzLibModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {
	private router: Router = inject(Router);
	public exibeSenha: boolean = false;

	public entrarComoConvidado() {
		this.router.navigate(['/convidado']);
	}

	public acessarTelaCadastro() {
		this.router.navigate(['/cadastro']);
	}
}
