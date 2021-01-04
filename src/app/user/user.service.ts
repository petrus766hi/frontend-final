import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  getAll: () => 'https://backendsfinal.herokuapp.com/api/peserta/getall',
  update: (id: any) => `https://backendsfinal.herokuapp.com/api/peserta/update/` + id,
  delete: (id: any) => `https://backendsfinal.herokuapp.com/api/peserta/delete/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getDataPeserta(): Observable<any> {
    return this.httpClient.get(routes.getAll()).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  UpdateDataPeserta(id: any, data: any): Observable<any> {
    return this.httpClient.put(routes.update(id), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  DeleteDataPeserta(id: any): Observable<any> {
    return this.httpClient.delete(routes.delete(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
