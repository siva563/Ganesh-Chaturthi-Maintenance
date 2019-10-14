import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class APIService<T> {

  get requestHeaders():Headers{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
    constructor(
        private httpClient: HttpClient
        
      ) {}
    
      public get(endPoint:string,callback?:any): Observable<T> {
        return this.httpClient
          .get<T>(endPoint,{headers:this.requestHeaders(),withCredentials:true}).pipe(tap(data => {

          }));
      }
    
      public post(endPoint:string,data:T,callback?:any): Observable<T> {
        return this.httpClient
          .post<T>(endPoint,data,{headers:this.requestHeaders(),withCredentials:true})
          .pipe(tap(data => {
            
          }));
      }
    
          
      put(endPoint:string,data:T,callback?:any): Observable<T[]> {
        return this.httpClient
          .put<T>(endPoint,data,{headers:this.requestHeaders(),withCredentials:true})
          .pipe(tap(data => {
            
          }));
      }
    
      delete(endPoint:string,callback?:any) {
        return this.httpClient
          .delete<T>(endPoint,{headers:this.requestHeaders(),withCredentials:true})
          .pipe(tap(data => {
            
          }));
      }

    
    }