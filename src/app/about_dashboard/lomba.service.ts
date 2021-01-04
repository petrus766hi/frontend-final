import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  getAll: () => 'https://backendsfinal.herokuapp.com/api/tournament/tournament/',
  update: (id: any) => `https://backendsfinal.herokuapp.com/api/tournament/tournament/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class LombaService {
  constructor(private httpClient: HttpClient) {}

  getAllTournament(): Observable<any> {
    return this.httpClient.get(routes.getAll()).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  getUpdateTournament(id: any, data: any): Observable<any> {
    return this.httpClient.put(routes.update(id), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
