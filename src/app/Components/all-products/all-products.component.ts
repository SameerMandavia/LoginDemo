import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/Models/product-item';
import { HomeService } from '../../Services/home.service';
import { Router } from '@angular/router';

/**
 * AllProducts Component.
 * @author Sameer Mandavia
 */

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  public allProducts: ProductItem[] = [];
  public productImgSrc1 = './assets/images/MacLaptop2.jpg';
  public currentPageNo : any;

  //Injected Services and Router for navigation purpose.
  constructor(private homeService: HomeService, private router: Router) {
    console.log("AllProducts Module"); 
  }

  //Always first it will displaying all products.
  ngOnInit(): void {
    this.showAllProducts();
  }

  //Method for displaying all products.
  showAllProducts() {
    this.homeService
      .showProducts()
      .subscribe((products) => console.log((this.allProducts = products)));
  }

  //Method for select a single product and navigate to view that Product.
  onSelect(product: ProductItem) {
    this.router.navigate(['/viewProduct', product.productName]);
  }
}
