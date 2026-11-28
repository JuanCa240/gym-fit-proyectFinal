import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {

    showPassword: boolean = false;

    message: string = '';

    // Formulario reactivo de inicio de sesión.
    loginForm = new FormGroup({

        // Validaciones del correo electrónico.
        email: new FormControl('', [
            Validators.required,
            Validators.email,
            Validators.pattern(/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[a-zA-Z]{2,}$/)
        ]),

        // Validaciones de la contraseña.
        password: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.minLength(8),
                Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/)
            ]
        })

    });

    // Alterna la visibilidad de la contraseña.
    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }

    // Obtiene el valor actual de la contraseña.
    get passwordValue(): string {
        return this.loginForm.controls.password.value;
    }

    // Comprueba la longitud mínima.
    hasMinLength(): boolean {
        return this.passwordValue.length >= 8;
    }

    // Comprueba si contiene una mayúscula.
    hasUppercase(): boolean {
        return /[A-Z]/.test(this.passwordValue);
    }

    // Comprueba si contiene una minúscula.
    hasLowercase(): boolean {
        return /[a-z]/.test(this.passwordValue);
    }

    // Comprueba si contiene un número.
    hasNumber(): boolean {
        return /\d/.test(this.passwordValue);
    }

    // Comprueba si contiene un carácter especial.
    hasSpecialCharacter(): boolean {
        return /[^A-Za-z0-9\s]/.test(this.passwordValue);
    }

    // Comprueba que no contiene espacios.
    hasNoSpaces(): boolean {
        return this.passwordValue.length > 0 &&
            !/\s/.test(this.passwordValue);
    }


    // Maneja el envío del formulario.
    onSubmit(): void {

        this.message = '';

        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        this.message = 'Formulario validado correctamente.';
    }

}