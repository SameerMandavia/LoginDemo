import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


/**
 * Service Name = Profile Service.
 *
 * @author sameer mandavia
 *
 * */

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //to update the user details.
  private UPDATE_USER_URL = 'http://localhost:9090/capstore/updateUser';

  constructor(private http: HttpClient) {}

  //Update user details.
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.UPDATE_USER_URL, user).pipe(catchError(this.handleError));
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
