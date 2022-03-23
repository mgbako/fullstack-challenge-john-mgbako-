import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/pages/auth/auth.service';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!/^(http|https):/i.test(request.url)) {
      const url = request.url;
      /* if(url.split('/')[1] === 'client'){
        console.log(url, url.split('/')[1])
        const newUrl = url.split('client')[1];
        
        if(url === '/client/api/Account/login'){
          const newUrl = url.split('client')[1];
          request = request.clone({ url: environment.clientUrl + newUrl});
        }else{
          request = request.clone({ url: environment.clientUrl + newUrl, setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('paymentToken')}`
          } });
        }
        
        
      } 
      else{
      } */

      console.log(
        '`Bearer ${this.authService.token}`',
        `Bearer ${this.authService.token}`
      );
      request = request.clone({
        url: environment.baseUrl + request.url,
        setHeaders: {
          Authorization: `Bearer ${this.authService.token}`,
        },
      });
    }
    return next.handle(request);
  }
}

// url.split('client')[1].split('/').indexOf('Account') == 1
