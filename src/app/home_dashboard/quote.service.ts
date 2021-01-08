import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const endpoint: any = 'https://backendsfinal.herokuapp.com';

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  getRandomQuote(arg0: { category: string }) {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient: HttpClient) {}

  getAllPanitia(): Observable<any> {
    return this.httpClient.get(`${endpoint}/api/panitia/getall`).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  getPanitia(id: any): Observable<any> {
    return this.httpClient.get(`${endpoint}/api/panitia/getpanitia/${id}`).pipe(
      map((body: any) => body.data.panitia),
      catchError((err) => of(err))
    );
  }
  createPanitia(data: any): Observable<any> {
    return this.httpClient.post(`${endpoint}/api/panitia/user`, data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  createTournament(data: any): Observable<any> {
    return this.httpClient.post(`${endpoint}/api/tournament/register`, data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  DeleteDataPeserta(id: any): Observable<any> {
    return this.httpClient.delete(`${endpoint}/api/panitia/delete/${id}`).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  UpdateRegisterPanitia(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${endpoint}/api/panitia/panitiaregister/${id}`, data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  getDataPeserta(): Observable<any> {
    return this.httpClient.get(`${endpoint}/api/peserta/getall`).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  getAllTournament(): Observable<any> {
    return this.httpClient.get(`${endpoint}/api/tournament/tournament/`).pipe(
      map((body: any) => body.data.tournaments),
      catchError((err) => of(err))
    );
  }
  getMasterCodeTournament(): Observable<any> {
    return this.httpClient.get(`${endpoint}/api/getmasterlomba`).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
