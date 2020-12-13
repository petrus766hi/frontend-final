import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokens: any = localStorage.getItem('token');
    let tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokens}`,
      },
    });
    return next.handle(tokenReq);
  }
}
