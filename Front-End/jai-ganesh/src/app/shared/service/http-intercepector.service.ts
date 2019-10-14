import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpSentEvent, HttpHeaderResponse  } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepectorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
       // throw new Error("Method not implemented.");
       return null;
    }

    constructor(
                
      ) {}
}
