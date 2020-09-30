import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Order } from 'src/app/Models/order';
import { Transaction } from '../../Models/transaction';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';
import { TransactionService } from '../../Services/transaction.service';
import { LoginService } from '../../Services/login.service';
import { DataService } from '../../Services/data.service';

/**
 * @author Sameer Mandavia
 * Transaction Component to complete User's order payment.
 */

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  /**
   * @param order       -> To store order details (Product Info,User Info,Total Amount,Total Quantity).
   * @param transaction -> To store order details and Transaction.
   * @param user        -> To store User info using session.
   * @param orderInfo   ->  In DataService, I've created getter & setter method for get the current,
   *                      product Info, And it will store the details in orderInfo Object to buy
   *                      a product.
   */

  public order: Order;
  public transaction: Transaction;
  public user: User;
  public orderInfo: Order;

  //Injected Services and router for navigation.
  constructor(
    private transactionService: TransactionService,
    private loginService: LoginService,
    private dataService: DataService,
    private router: Router
  ) {
    this.order = new Order();
    this.transaction = new Transaction();
    this.orderInfo = new Order();
    console.log("Transaction Module");

  }

  //First get User details by user session and Validations for Transaction form.
  ngOnInit(): void {
    this.user = this.loginService.getUserSession();
    console.log(this.user);

    this.orderInfo = this.dataService.getProductInfo();
    console.log('order info', this.orderInfo);
    
  }

  //Method for buy a Product. In which order details has to assign in Transaction Variable.
  buyProduct() {
    this.transaction.user = this.orderInfo.user;
    this.transaction.order = this.orderInfo;
    
    this.transactionService
      .addTransaction(this.transaction)
      .subscribe((payment) => {
        console.log(payment, 'Transaction');
        alert('Payment successful!! Thank you for ordering!');
      });      
    this.transactionService.saveOrder(this.orderInfo).subscribe((order) => {
      this.order.cart = this.orderInfo.cart;
      console.log((this.order = order));
    });

    console.log(this.transaction);
    this.router.navigate(['/products']);
  }
}
