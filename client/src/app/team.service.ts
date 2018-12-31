import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {MessageService} from './message.service';

import { Team } from './team';
import { TEAMS } from './mock-teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsUrl = 'api/teams'

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  private log(message: string): void {
    this.messageService.add('TeamService: ' + message);
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl)
    .pipe(
      tap(_ => this.log('fetched teams')),
      catchError(this.handleError('getTeams', []))
    );
  }

  /** GET book by id. Will 404 if id not found */
  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.get<Team>(url).pipe(
      tap(_ => this.log(`fetched team id=${id}`)),
      catchError(this.handleError<Team>(`getTeam id=${id}`))
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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
