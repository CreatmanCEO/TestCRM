import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ReturnProduct } from '../models/returns.interface';
import { ErrorHandlingService } from '@core/services/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class ReturnsService {
  private apiUrl = 'api/returns';

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlingService
  ) {}

  getReturns(): Observable<ReturnProduct[]> {
    return this.http.get<ReturnProduct[]>(this.apiUrl)
      .pipe(
        catchError(error => this.errorHandler.handleError(error))
      );
  }

  updateReturnStatus(id: string, status: 'returned' | 'not_returned'): Observable<ReturnProduct> {
    return this.http.patch<ReturnProduct>(`${this.apiUrl}/${id}`, { returnStatus: status })
      .pipe(
        catchError(error => this.errorHandler.handleError(error))
      );
  }

  updateComment(id: string, comment: string): Observable<ReturnProduct> {
    return this.http.patch<ReturnProduct>(`${this.apiUrl}/${id}`, { comment })
      .pipe(
        catchError(error => this.errorHandler.handleError(error))
      );
  }
} 