import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  getAll: () => `https://backendsfinal.herokuapp.com/api/tournament/tournament/`,
  sort: (sort: any) => `https://backendsfinal.herokuapp.com/api/tournament/tournament/?sortBy=${sort}`,
};

@Injectable({
  providedIn: 'root',
})
export class ListLombaService {
  constructor(private httpClient: HttpClient) {}

  getAllTournament(): Observable<any> {
    return this.httpClient.get(routes.getAll()).pipe(
      map((body: any) => body.data),
      catchError(() => of('err'))
    );
  }
  getAllTournamentSort(sort: any): Observable<any> {
    return this.httpClient.get(routes.sort(sort)).pipe(
      map((body: any) => body.data.tournaments),
      catchError(() => of('err'))
    );
  }
}
