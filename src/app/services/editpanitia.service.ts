import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
const routes = {
  detail: (id: any) => `https://backendsfinal.herokuapp.com/api/panitia/getpanitia/` + id,
  update: (id: any) => `https://backendsfinal.herokuapp.com/api/panitia/updatepanitia/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class EditpanitiaService {
  constructor(private httpClient: HttpClient) {}

  getDataPanitia(id: any): Observable<any> {
    return this.httpClient.get(routes.detail(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  updateDataPanitia(id: any, data: any): Observable<any> {
    return this.httpClient.put(routes.update(id), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
