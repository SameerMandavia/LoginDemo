import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewProductService } from '../../Services/view-product.service';
import { ProductItem } from 'src/app/Models/product-item';
import { Order } from 'src/app/Models/order';
import { LoginService } from '../../Services/login.service';
import { User } from 'src/app/Models/user';
import { DataService } from 'src/app/Services/data.service';

/**
 * @author Sameer Mandavia
 * View Product Component.
 *
 */

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  /**
   * @param productByName -> Get the product by its name and stored in this object.
   * @param addItem       -> To increase the quantity and pass the object,created an array to
   *                         store multiple Products.
   * @param removeItem    -> To decrease the quantity and pass the object ,Created an array.
   * @param order         -> To store Product info and User info.
   * @param product       -> For add and remove the quantity ,we also have to pass the product in 
   *                         productItem Object.
   * @param quantity      -> For storing the quantity numbers.(Add or Remove product).
   * @param totalAmount   -> Based on quantity increases or decreases,we have to display the
   *                         totalAmount to the user to pay amount.
   * @param user          -> To store the User details using Session.
   * @param finalOrder    -> To store the product details,user details,Total quantity,Total Amount.
   *
   */
  public productName: string;
  public productByName: ProductItem;
  public addItem: ProductItem[] = [];
  public removeItem: ProductItem[] = [];
  private order: Order;
  public product: ProductItem;
  public amount: number = 0;
  public quantity: number = 1;
  public totalAmount: number = 0;
  private user: User;
  private finalOrder: Order;

  //Injected Services and router for navigation.
  constructor(
    private route: ActivatedRoute,
    private viewProductService: ViewProductService,
    private loginService: LoginService,
    private dataService: DataService,
    private router: Router
  ) {
    this.productByName = new ProductItem();
    this.order = new Order();
    this.finalOrder = new Order();
    console.log("ViewProduct Module");

  }

  //getProduct by name and also get user using user session.
  ngOnInit(): void {
    this.productName = this.route.snapshot.paramMap.get('productName');
    this.getProductByProductName();

    this.user = this.loginService.getUserSession();
    console.log(this.user);

    console.log((this.order.user = this.user), 'order');
  }

  //Method for Get product by product name.
  getProductByProductName() {
    this.viewProductService
      .getProductByName(this.productName)
      .subscribe((getProduct) =>
        console.log(
          ((this.productByName = getProduct),
          (this.totalAmount = this.productByName.amount))
        )
      );
  }

  //To increase the product quantity and also increase its Amount by quantity.
  addProduct(product: ProductItem) {
    this.addItem.push(product);
    this.quantity++;
    // this.amount = product.amount;
    this.totalAmount = product.amount * this.quantity;
    console.log(this.amount);
    console.log(this.totalAmount, 'TotalAmount');
    console.log(product.amount);
  }

  //To decrease the product quantity and also decrease its Amount by quantity.
  removeProduct(product: ProductItem) {
    if (this.removeItem.indexOf(product) != 0) {
      // this.removeItem.splice(this.removeItem.indexOf(product), 1);
      this.removeItem.splice(1);

      this.quantity--;
      this.totalAmount = product.amount * this.quantity;

      console.log(this.totalAmount, 'remove');
    }
  }

  //It will calculate the Total amount of Order.
  payment() {
    this.order.user = this.user;
    this.order.cart = this.productByName;
    this.order.totalAmount = this.totalAmount;
    console.log(this.order.totalAmount);

    this.order.totalQuantity = this.quantity;
    console.log(this.order.totalQuantity);
    this.dataService.setProductInfo(this.order);
    this.finalOrder = this.order;

    if (this.user.walletAmount < this.totalAmount) {
      if (confirm('Not enough amount in wallet!!Want to leave?')) {
        this.router.navigate(['/products']);
      }
    } else {
      console.log(this.finalOrder, 'Final order');
      this.router.navigate(['/transaction']);
    }
  }
}
