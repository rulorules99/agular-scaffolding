import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginForm  {

    public loginForm: FormGroup = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    hasError(formName, field, typeError): boolean {
        return this[formName].get(field).hasError(typeError);
    }
}
