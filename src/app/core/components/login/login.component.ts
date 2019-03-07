import { LoginForm } from '../../forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private auth: AuthService, public form: LoginForm, public router: Router) {}

  /**
  * Submit form for login user.
   * @return void
  */
  public onSubmit (): void {

    this.success({data: {token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NTE5ODY3ODYsImV4cCI6MjUzMDIwNzU5NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.3savcQzU3EGvsMhWCKLEUC--Xbku0OnubbjOMH5SboE'}});

    // Uncommented when apply api service
    // this.auth.login(this.form.loginForm.value).then( this.success.bind(this)).catch( this.error.bind(this));
  }

  private success(response): void {
    localStorage.setItem('token', response.data.token);
    this.router.navigate(['/main']);
  }

  private error(error): void {
    console.log(error);
  }
}
