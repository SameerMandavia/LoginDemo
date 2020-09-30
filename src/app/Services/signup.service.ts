import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/user';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


/**
 * Service Name = Signup Service.
 *
 * @author sameer mandavia
 *
 * */

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  //Request for create a account for user.
  private SIGNUP_URI: string = 'http://localhost:9090/capstore/signUp';

  //to create a account
  signUp(signUp: User): Observable<User> {
    return this.http.post<User>(this.SIGNUP_URI, signUp).pipe(catchError(this.handleError));
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `${error.error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
