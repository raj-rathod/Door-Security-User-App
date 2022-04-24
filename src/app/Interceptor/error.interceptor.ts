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
  

    intercept(
      req: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      let newHeaders = req.headers;
      
      const authReq = req.clone({headers: newHeaders});
      return next.handle(authReq).pipe(catchError((x) => this.handleAuthError(x)));
    }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
      if (err?.error instanceof ErrorEvent) {
        this.alertService.showErrorAlert(err?.error?.message);
      } else {
        if (err?.error instanceof ProgressEvent) {
          this.alertService.showErrorAlert('Network Request failed');
        } else {
          if (err?.error?.error?.details && err?.error?.error?.details.length > 0) {
            this.alertService.showErrorAlert(
              `${err?.error?.error?.details[0].path} ${err?.error?.error?.details[0].message}`
            );
          } else {
           if(err.status === 404) {
            this.alertService.showErrorAlert(
              `Not Found `
            );
           }else{
            this.alertService.showErrorAlert(
              `${err?.error?.error?.message}`
            );
           }
            
        }
        }
      }
  
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return throwError(err?.error?.message || err.statusText);
    }
  }
  