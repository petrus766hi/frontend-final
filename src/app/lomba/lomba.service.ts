import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { data } from 'jquery';

const routes = {
  getOne: (id: any) => `https://backendsfinal.herokuapp.com/api/tournament/tournament/` + id,
  register: (id: any) => `https://backendsfinal.herokuapp.com/api/peserta/updatepeserta/` + id,
  getPeserta: (id: any) => `https://backendsfinal.herokuapp.com/api/peserta/getId/` + id,
  checkPeserta: (id: any) => `https://backendsfinal.herokuapp.com/api/peserta/updateregister/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class LombaService {
  constructor(private httpClient: HttpClient) {}

  getDetailTournament(id: any): Observable<any> {
    return this.httpClient.get(routes.getOne(id)).pipe(
      map((body: any) => body.data),
      catchError(() => of('err'))
    );
  }
  RegisterPeserta(id: any, data: any): Observable<any> {
    return this.httpClient.put(routes.register(id), data).pipe(
      map((body: any) => body),
      catchError(() => of('err'))
    );
  }
  GetPeserta(id: any): Observable<any> {
    return this.httpClient.get(routes.getPeserta(id)).pipe(
      map((body: any) => body),
      catchError(() => of('err'))
    );
  }
  UpdatePeserta(id: any, data: any): Observable<any> {
    return this.httpClient.put(routes.checkPeserta(id), data).pipe(
      map((body: any) => body),
      catchError(() => of('err'))
    );
  }
}
