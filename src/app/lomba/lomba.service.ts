import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  getOne: (id: any) => `https://backendsfinal.herokuapp.com/api/tournament/tournament/` + id,
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
}
