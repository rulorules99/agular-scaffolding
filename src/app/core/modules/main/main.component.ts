import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-main.comp-rendered',
  templateUrl: './main.component.html'
})
export class MainComponent {

  constructor(private auth: AuthService, public router: Router) {
  }

  /**
   * Log out the user
   * @return: void
   */
  public logOut(): void {

    this.success();

    // Uncommented when apply api service
    // this.auth.logOut().then(this.success.bind(this));
  }

  private success(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
