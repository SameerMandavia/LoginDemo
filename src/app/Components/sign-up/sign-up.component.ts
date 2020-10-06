import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../../Services/signup.service';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';

/**
 * @author sameer mandavia
 * Signup Component.
 *
 */

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  /**
   * @param user         -> To store the user details(Username,EmailId,Wallet Amount,Password).
   * @param userDetails  -> When on clicking on submit button,Forms data will be store in this object.
   * @param headerImgSrc -> Image source.
   */

  private user: User;
  private userdetails: User;
  public headerImgSrc = 'assets/images/MacLaptop3.jpg';

  //Injected SignUp service and Router for navigation.
  constructor(private signUpService: SignupService, private router: Router) {
    this.user = new User();
    this.userdetails = new User();
    console.log("SignUp Module");

  }

  ngOnInit(): void {}

  //SignUp Form Validations.
  public signupForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8),
    ]),
    gender: new FormControl('',[Validators.required]),
    contact: new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(10)]),
  });

  /***
   * signUp():To create a account this module is used.
   *
   */
  signUp() {
    this.user.userName = this.signupForm.value.userName;
    this.user.emailId = this.signupForm.value.emailId;
    this.user.password = this.signupForm.value.password;
    this.user.gender = this.signupForm.value.gender;
    this.user.contactNo = this.signupForm.value.contact;
    
    this.user.walletAmount = 100000;

    this.signUpService.signUp(this.user).subscribe((details) => {
      this.userdetails = details;
      console.log(this.userdetails);
      alert('Account created Successfully ' + this.user.userName);
      this.router.navigate(['/home']);
    },
    (error)=>{
      console.log(error);
    }
    );
    
  }
}
