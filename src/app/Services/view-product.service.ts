import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { ProductItem } from '../Models/product-item';
import { User } from 'src/app/Models/user';

/**
 * Service Name = View Product Service.
 *
 * @author sameer mandavia
 *
 * */

@Injectable({
  providedIn: 'root',
})
export class ViewProductService {
  public productName: string;

  //Request for Get product by product name.
  private GET_PRODUCT_BY_NAME = 'http://localhost:9090/capstore/product/getProductByProductName';
  //Request for Get user by user ID.
  private GET_USER_BY_USERID = 'http://localhost:9090/capstore/getUserByUserId';

  constructor(private http: HttpClient) {}

  //Method for get Product by product name.
  getProductByName(productName: string): Observable<ProductItem> {
    return this.http.get<ProductItem>(
      this.GET_PRODUCT_BY_NAME + '/' + productName
    ).pipe(catchError(this.handleError));
  }
  //Method for get user by user ID.
  getUserByUserId(userId: number): Observable<User> {

    return this.http.get<User>(this.GET_USER_BY_USERID + '/' + userId).pipe(catchError(this.handleError));
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
