import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const senhasCoincidemValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
	const senha = control.get('senha');
	const confirmaSenha = control.get('confirmaSenha');

	return senha && confirmaSenha && senha.value === confirmaSenha.value ? { senhasCoincidem: true } : null;
};

@Directive({
	selector: '[appSenhasCoincidem]',
	providers: [
		{provide: NG_VALIDATORS, useExisting: SenhasCoincidemDirective, multi: true},
	],
})
export class SenhasCoincidemDirective implements Validator {
	validate(control: AbstractControl): ValidationErrors | null {
		return senhasCoincidemValidator(control);
	}
}
