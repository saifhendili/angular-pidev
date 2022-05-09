import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(request, next) {
    let tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    });
    return next.handle(tokenizedRequest);
  }
}
