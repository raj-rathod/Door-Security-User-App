/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';
  import { throwError, Observable } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
import { AlertService } from '../Services/Alert/alert.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private alertService: AlertService
    ) {}
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    intercept(
      req: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      let newHeaders = req.headers;
      
      const authReq = req.clone({headers: newHeaders});
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return next.handle(authReq).pipe(catchError((x) => this.handleAuthError(x)));
    }
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private handleAuthError(err: HttpErrorResponse): Observable<any> {
      if (err?.error instanceof ErrorEvent) {
        this.alertService.showErrorAlert(err?.error?.message);
      } else {
        if (err?.error instanceof ProgressEvent) {
          this.alertService.showErrorAlert('Network Request failed');
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (err?.error?.error?.details && err?.error?.error?.details.length > 0) {
            this.alertService.showErrorAlert(
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              `${err?.error?.error?.details[0].path} ${err?.error?.error?.details[0].message}`
            );
          } else {
            this.alertService.showErrorAlert(
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              `${err?.error?.error?.message}`
            );
        }
        }
      }
  
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return throwError(err?.error?.message || err.statusText);
    }
  }
  