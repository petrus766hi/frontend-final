import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  endpoint: any = 'https://backendsfinal.herokuapp.com';
  constructor(private router: Router, private http: HttpClient) {}

  getProfile(id: any): Observable<any> {
    return this.http.get(`${this.endpoint}api/peserta/getId/${id}`).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
