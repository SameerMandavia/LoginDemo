import { Component, OnInit, forwardRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';

/**
 *@author sameer mandavia
 * Login Component.
 *
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /**
   * @param user -> To store the form data.
   */

  public user: User = {} as User;
  public headerImgSrc = 'assets/images/MacLaptop3.jpg';
  public loginForm: FormGroup;
  public isLoading: boolean = false;

  /**
   * Injecting services and router in constructor and insialized.
   *
   */

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    console.log("Login Module");

  }

  ngOnInit(): void {
    /**
     * Create LoginForm for data access and Validations.
     * Validation used => Required,minLength
     *
     */

    this.loginForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  /**
   *
   * login() to check and compare the data if user data is correct than showing,
   * alert message ('Login Suucessful')
   * if data is not correct ,
   * alert message('Incorrect Username or Password ')
   *
   */

  login() {
    this.user.userName = this.loginForm.controls.userName.value;
    this.user.password = this.loginForm.controls.password.value;

    this.loginService.userLogin(this.user).subscribe(
      (userLogin) => {
        if (userLogin != null) {
          this.loginService.createSession(userLogin);
          this.isLoading = true;

          setTimeout(() => {
            this.isLoading = false;
            alert('Login Successfull');
            this.router.navigate(['/products']);
          }, 2000);
        }
      },
      (error) => {
        this.router.navigate(['/login']);
        this.loginForm.reset();
        console.log(error);
      }
    );
  }
}
