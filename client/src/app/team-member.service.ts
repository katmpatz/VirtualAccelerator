import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { TeamMember } from './teamMember';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET teamMembers from the server */
  getTeamMembers(teamId: number): Observable<TeamMember[]> {
    let url = `api/teams/${teamId}/teammembers`;
    return this.http.get<TeamMember[]>(url)
      .pipe(
        tap(teammembers => this.log(`fetched teammembers`)),
        catchError(this.handleError('getTeamMembers', []))
      );
  }

  /** POST: add a new teamMember to the server */
  addTeamMember(teamMember: TeamMember): Observable<TeamMember> {
    let url = `api/teams/${teamMember.team}/teammembers`;
    console.log(teamMember.name)
    console.log(teamMember.team)
    return this.http.post<TeamMember>(url, teamMember, httpOptions).pipe(
      tap((teamMember: TeamMember) => this.log(`added teamMember w/ id=${teamMember.id}`)),
      catchError(this.handleError<TeamMember>('addTeamMember'))
    );
  }

  /** PUT: update the team on the server */
  updateTeamMember (teamMember: TeamMember, teamId: number): Observable<TeamMember> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    let url = `api/teams/${teamMember.team}/teammembers/${teamMember.id}`;
    return this.http.put<TeamMember>(url, teamMember, httpOptions)
      .pipe(
        catchError(this.handleError('updateTeamMember', teamMember))
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
