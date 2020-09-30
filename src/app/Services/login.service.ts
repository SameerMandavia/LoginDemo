import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/Models/login';
import { catchError } from 'rxjs/operators';

/**
 * Service Name = Login Service.
 *
 * @author sameer mandavia
 *
 * */

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //To check user is logged in or not.
  public isUserloggedIn: boolean = false;
  public loggedInUser: User;

  constructor(private http: HttpClient) {}

  //request for login
  private LOGIN_URI: string = 'http://localhost:9090/capstore/login';
  //request for get user by its userID.
  private GET_USER_BY_USERID = 'http://localhost:9090/capstore/getUserByUserId';

  //userLogin() method for User login.
  userLogin(userLogin: Login): Observable<User> {
    console.log(userLogin.userName);
    console.log(userLogin.password);

    return this.http
      .post<User>(this.LOGIN_URI, userLogin)
      .pipe(catchError(this.handleError));
  }

  //creatSession() method for store user details.
  createSession(user: User) {
    this.isUserloggedIn = true;
    this.loggedInUser = user;
    localStorage.setItem('userId', this.loggedInUser.userId.toString());
    console.log(localStorage.getItem('userId'));
  }
  //destroySession() method for destroy the session of user.
  destroySession() {
    this.isUserloggedIn = false;
    this.loggedInUser = new User();
    localStorage.clear();
  }

  //It will fetch the user by user Id.
  fetchUser(userId: number): Observable<User> {
    return this.http.get<User>(this.GET_USER_BY_USERID + '/' + userId).pipe(catchError(this.handleError));
  }

  //We get the user session
  getUserSession(): User {
    this.fetchUser(+localStorage.getItem('userId')).subscribe((data) => {
      this.loggedInUser = data;
      console.log(this.loggedInUser, 'LoggedInUser');
    });
    return this.getLoggedInUser();
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
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
