import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Models/transaction';
import { Order } from 'src/app/Models/order';
import { catchError } from "rxjs/operators";

/**
 * Service Name = Transaction Service.
 *
 * @author sameer mandavia
 *
 * */

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  //Request for Add Transaction(payment).
  private ADD_TRANSACTION_URL =
    'http://localhost:9090/capstore/transaction/addTransaction';
  //Request for Add Order.
  private SAVE_ORDER_URL = 'http://localhost:9090/capstore/order/saveOrder';
  //Request for Get all orders by user ID.
  private GET_ALL_ORDERS_BY_USER_ID =
    'http://localhost:9090/capstore/order/getAllOrdersByUserId';

  constructor(private http: HttpClient) {}

  //method for Add Transaction.
  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.ADD_TRANSACTION_URL, transaction)
    .pipe(catchError(this.handleError));
  }

  //method for Save Order.
  saveOrder(order: Order): Observable<Order> {
    
    return this.http.post<Order>(this.SAVE_ORDER_URL, order)
    .pipe(catchError(this.handleError));
  }

  //method for get all orders by user ID.
  getAllOrdersByUserId(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(
      this.GET_ALL_ORDERS_BY_USER_ID + '/' + userId
    ).pipe(catchError(this.handleError));
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
