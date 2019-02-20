import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { TeamMember } from './teamMember';


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

  /** GET teammember by id. Will 404 if id not found */
  getTeamMember(id: number): Observable<TeamMember> {
    const url = `api/teammembers/${id}`;
    return this.http.get<TeamMember>(url).pipe(
      tap(_ => this.log(`fetched teammember id=${id}`)),
      catchError(this.handleError<TeamMember>(`getTeamMember id=${id}`))
    );
  }

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
    return this.http.post<TeamMember>(url, teamMember, httpOptions).pipe(
      tap((teamMember: TeamMember) => this.log(`added teamMember w/ id=${teamMember.user}`)),
      catchError(this.handleError<TeamMember>('addTeamMember'))
    );
  }

  /** PUT: update the team member on the server */
  updateTeamMember (teamMember: TeamMember): Observable<TeamMember> {
    console.log(teamMember.team);
    let url = `api/teams/${teamMember.team}/teammembers/${teamMember.user}`;
    return this.http.put<TeamMember>(url, teamMember, httpOptions)
      .pipe(
        catchError(this.handleError('updateTeamMember', teamMember))
      );
  }

  /** DELETE: delete the team from the server */
  deleteTeamMember(teamMember: TeamMember): Observable<TeamMember> {
    const url = `api/teams/${teamMember.team}/teammembers/${teamMember.user}`;;
    return this.http.delete<TeamMember>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted teamMember id=${teamMember.user}`)),
      catchError(this.handleError<TeamMember>('deleteTeamMember'))
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
