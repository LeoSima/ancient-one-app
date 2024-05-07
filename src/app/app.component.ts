import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

@Component({
	selector: 'app-root',
	standalone: true,
	template: `
	<main>
		<router-outlet></router-outlet>
	</main>`,
	imports: [RouterOutlet, LoginComponent],
	styleUrl: './app.component.scss'
})
export class AppComponent {
}
