import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidators{
	static testeValidator(control: AbstractControl): ValidationErrors | null {
		const controlValue = control.value;

		if (controlValue === 'teste') return { teste: true };

		return null;
	}
}
