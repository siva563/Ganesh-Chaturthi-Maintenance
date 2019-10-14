import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthServices{

    _userDetails:BehaviorSubject<any> = new BehaviorSubject<any>(null);
    get userDetails(){
        return this._userDetails.asObservable();
    }
    constructor(
                
      ) {}
}
