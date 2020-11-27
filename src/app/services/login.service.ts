import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router} from '@angular/router';

const httpConnect = {
  headers : new HttpHeaders({'Content-Type':'application/json'}),
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint: any = 'http://localhost:3000';
  constructor(
    private http:HttpClient,
        private router: Router,
  ) { }

  login(data: any): Observable<any> {
    console.log('data', data)
    return this.http.post(`${this.endpoint}/api/`, data, httpConnect).pipe(
     map((body: any) => body),
     catchError((err) => of(err))
    ) 
 }
}
