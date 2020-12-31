import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  getOne: (id: any) => `https://backendsfinal.herokuapp.com/api/tournament/tournament/${id}`,
  update: (id: any) => `https://backendsfinal.herokuapp.com/api/peserta/updatescore/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class DetailPesertaService {
  constructor(private httpclient: HttpClient) {}

  getDataTournamentDetail(id: any): Observable<any> {
    return this.httpclient.get(routes.getOne(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  updateScore(id: any, data: any): Observable<any> {
    return this.httpclient.put(routes.update(id), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
