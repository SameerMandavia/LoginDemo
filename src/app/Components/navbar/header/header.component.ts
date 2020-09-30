import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../Services/login.service';

/**
 * Header Component for navbar.
 * @author sameer mandavia
 * 
 * */ 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

     public isLoggedIn : boolean = true;

  constructor(private router : Router, public loginService : LoginService) { 
    console.log("Header Module");

  }

  ngOnInit(): void {
  }


  /**
   * login() for navigate to Login page.
   * 
   */
  login(){
      this.router.navigate(['/login']);
  }


  /**
   * signup() for navigate to SignUp page.
   * 
   */
  signup()
  {
      this.router.navigate(['/signUp'])
  }

  //To view User's Profile and update Profile.
  checkProfile()
  {
    this.router.navigate(['/profile'])
  }

  //Logout and destroy the user session.
  logOut()
  {
    if(confirm("Are you sure?")){
    this.loginService.destroySession();
    this.router.navigate(["/home"]);
    }
  }
}
