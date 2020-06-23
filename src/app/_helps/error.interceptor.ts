import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    router: Router;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                //this.logOut();
                //location.reload(true);
                localStorage.removeItem('currentUser');
                localStorage.removeItem('token');
                this.router.navigate(['auth/login']);

            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }


}