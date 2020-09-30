import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductItem } from '../Models/product-item';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

/**
 * Service Name = Home Service.
 *
 * @author sameer mandavia
 *
 * */

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  //Request for Display all Products.
  private showAllProducts =
    'http://localhost:9090/capstore/product/getAllProducts';

  constructor(private http: HttpClient) {
    
  }

  //Method for display all products.
  showProducts(): Observable<ProductItem[]> {
   console.log("service")
    return this.http
      .get<ProductItem[]>(this.showAllProducts);
  }
}
