import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

const routes = {
  get: (id: any) => `https://backendsfinal.herokuapp.com/api/tournament/peserta/` + id,
  update: (id: any) => `https://backendsfinal.herokuapp.com/api/peserta/updatescore/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class UpdatescoreService {
  constructor(private HttpClient: HttpClient) {}

  getDetail(id: any): Observable<any> {
    return this.HttpClient.get(routes.get(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  updateScore(id: any, data: any): Observable<any> {
    return this.HttpClient.put(routes.update(id), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
