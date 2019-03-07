import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../../environments/environment';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request);
    // only for load custom icons from shared.module.ts
    if (request.url.includes('assets/img')) {
      return next.handle(request);
    }

    const url = `${environment.apiUrl}/${request.url}`;

    request = request.clone({
      setHeaders: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      },
      url: url
    });

    return next.handle(request);
  }
}






