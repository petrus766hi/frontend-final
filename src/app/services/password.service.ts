import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpConnect = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  endpoint: any = 'https://backendsfinal.herokuapp.com';
  constructor(private router: Router, private http: HttpClient) {}

  passwordForget(data: any): Observable<any> {
    return this.http.put(`${this.endpoint}/api/peserta/forgotpassword`, data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
