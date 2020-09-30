import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private productInfo: Order;

  getProductInfo() {
    return this.productInfo;
  }
  setProductInfo(order: Order) {
    this.productInfo = order;
  }

  constructor() {}
}
