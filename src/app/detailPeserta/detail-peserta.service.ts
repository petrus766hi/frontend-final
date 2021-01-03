import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  getOne: (id: any) => `https://backendsfinal.herokuapp.com/api/tournament/tournament/${id}`,
  update: () => `https://backendsfinal.herokuapp.com/api/peserta/updatescore`,
  winner: (id: any) => `http://localhost:3000/api/tournament/tournament/winner/${id}`,
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
  updateScore(data: any): Observable<any> {
    return this.httpclient.put(routes.update(), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  updateWinner(id: any, data: any): Observable<any> {
    return this.httpclient.put(routes.winner(id), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
