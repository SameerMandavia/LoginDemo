import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from "../Services/login.service";
@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {
 
  constructor(private loginService : LoginService,private router : Router){}

  canActivate(): boolean  {
    console.log(this.loginService.isUserloggedIn);
    if(this.loginService.isUserloggedIn)
        return true;
    else{
      alert("Your session time is over! Please Login again!!");
      this.router.navigate(['/login']);
      return false;
    }

       
  }
  
}
