import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {MessageService} from './message.service';

import { Deliverable } from './deliverable';

@Injectable({
  providedIn: 'root'
})
export class DeliverableService {

  private deliverablesUrl = 'api/deliverables'

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  private log(message: string): void {
    this.messageService.add('DeliverableService: ' + message);
  }

  getDeliverables(): Observable<Deliverable[]> {
    return this.http.get<Deliverable[]>(this.deliverablesUrl)
    .pipe(
      tap(_ => this.log('fetched deliverables')),
      catchError(this.handleError('getDeliverables', []))
    );
  }

  /** GET deliverable by id. Will 404 if id not found */
  getDeliverable(id: number): Observable<Deliverable> {
    const url = `${this.deliverablesUrl}/${id}`;
    return this.http.get<Deliverable>(url).pipe(
      tap(_ => this.log(`fetched deliverable id=${id}`)),
      catchError(this.handleError<Deliverable>(`getDeliverable id=${id}`))
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
