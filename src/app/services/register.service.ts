import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

const httpConnect = {
  headers: new HttpHeaders({'Content Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  endpoint: any = "https://backendsfinal.herokuapp.com";
  constructor(
    private http:HttpClient,
    private router: Router,  
  ) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.endpoint}/api/master/register`, data, httpConnect).pipe(
        map((body: any) => body),
        catchError((err) => of(err))
    )
  }
}
