import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from './Components/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductComponent } from './Components/view-product/view-product.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RoutingGuard } from "../app/Services/routing.guard";
import { CapstoreModule } from "../../projects/capstore/src/lib/capstore.module";
import {NgxPaginationModule} from 'ngx-pagination';
import { SpinnerComponent } from './Components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ViewProductComponent,
    TransactionComponent,
    AllProductsComponent,
    ProfileComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CapstoreModule,
    NgxPaginationModule
  ],
  providers: [RoutingGuard],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
