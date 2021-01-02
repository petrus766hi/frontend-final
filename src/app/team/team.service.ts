import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  endpoint: any = 'https://backendsfinal.herokuapp.com';
  constructor(private http: HttpClient) {}

  AddTeam(data: any, id: any): Observable<any> {
    console.log('xxx', data);
    return this.http.put(`${this.endpoint}/api/peserta/updategroup/${id}`, data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  GetTeam(id: any): Observable<any> {
    return this.http.get(`${this.endpoint}/api/peserta/getgroup/${id}`).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
