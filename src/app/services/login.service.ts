import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Peserta } from '../models/peserta';

const httpConnect = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  endpoint: any = 'https://backendsfinal.herokuapp.com';
  constructor(private http: HttpClient, private router: Router) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.endpoint}/api/peserta/login`, data, httpConnect).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }

  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }
}
