import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token: string;
  private path = 'path/';
  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {
    this._token = this.getToken();
  }

  /**
  * Validate if token is expired
  * @return boolean
  */
  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired( this.getToken());
  }

  /**
   * Get current token
   * @return string
   */
  public getToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * Call login for auth
   * @param credentials: any
   * @return Promise<any>
   */
  public login(credentials: any): Promise<any> {
      return this.http.post<any>( `${this.path}login`, credentials).toPromise();
  }

  /**
   * Call logout for un auth
   * @return Promise<any>
   */
  public logOut(): Promise<any> {
    return this.http.post<any>(`${this.path}logout`, {}).toPromise();
  }
}
