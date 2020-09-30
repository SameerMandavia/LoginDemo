import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ViewProductComponent } from './Components/view-product/view-product.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RoutingGuard } from './Services/routing.guard';
/**
 *@author Sameer mandavia
 * Routing Module for navigation purpose.
 */

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'products', component: AllProductsComponent,canActivate:[RoutingGuard]},
  { path: 'viewProduct/:productName', component: ViewProductComponent,canActivate:[RoutingGuard]},
  { path: 'transaction', component: TransactionComponent,canActivate:[RoutingGuard] },
  { path: 'profile', component: ProfileComponent,canActivate:[RoutingGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
