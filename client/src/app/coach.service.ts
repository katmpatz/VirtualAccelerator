import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Coach } from './coach';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    /** GET coach by id. Will 404 if id not found */
    getCoach(id: number): Observable<Coach> {
      const url = `api/coaches/${id}`;
      return this.http.get<Coach>(url).pipe(
        tap(_ => this.log(`fetched coach user=${id}`)),
        catchError(this.handleError<Coach>(`getCoach user=${id}`))
      );
    }

    /** PUT: update the team member on the server */
    updateCoach (coach: Coach): Observable<Coach> {
      const url = `api/coaches/${coach.user}`;
      return this.http.put<Coach>(url, coach, httpOptions)
        .pipe(
          catchError(this.handleError('updateCoach', coach))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        console.error(error); // log to console instead

        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    private log(message: string): void {
      this.messageService.add('TeamMemberService: ' + message);
    }



}
