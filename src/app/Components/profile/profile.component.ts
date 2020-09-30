import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { LoginService } from '../../Services/login.service';
import { ProfileService } from '../../Services/profile.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/Services/transaction.service';
import { Order } from 'src/app/Models/order';

/**
 * Profile Component for Check User's Profile and also to Update the details.
 * @author Sameer Mandavia
 */

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  /**
   * @param user       -> To store the user details using session and also to update the data.
   * @param order      -> All the past orders will be displayed here to user.
   * @param readonly   -> For enable/disable the textfiels to update the user details.
   * @param hidebtn    -> To enable/disable the Edit button.
   * @param showOrder  -> On click of link,It'll displaying all the orders which is purchased by
   *                      User.
   *
   */

  public user: User;
  orders: Order[] = [];
  private toggleBtn: boolean = true;
  public readonly: boolean = true;
  public hideBtn: boolean = true;
  public showOrder: boolean = false;
  public profileForm: FormGroup;

  //Injected Services and router.
  constructor(
    private loginService: LoginService,
    private profileService: ProfileService,
    private transactionService: TransactionService,
    private router: Router
  ) {
    this.user = new User();
    console.log("Profile Module");

  }

  //Get User details by User session and also get all orders.
  ngOnInit(): void {
    this.user = this.loginService.getUserSession();
    console.log(this.user);

    this.getAllOrders();

    this.profileForm = new FormGroup({
      userName: new FormControl(this.user.userName, [Validators.required]),
      emailId: new FormControl(this.user.emailId, [
        Validators.required,
        Validators.email,
      ]),
      contact : new FormControl(this.user.contactNo,[
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10)
      ]),
      walletAmount: new FormControl(this.user.walletAmount, [
        Validators.required,
      ]),
    });
  }

  //Enable to view Show all past orders which user has purchased.
  showOrders() {
    this.showOrder =! this.showOrder;
  }

  //To enable the textfiels for update the user data and displaying update button for Update user details.
  editUser() {
    this.readonly =! this.readonly;
    this.hideBtn =! this.hideBtn;
  }

  updateUser() {
    console.log(this.profileForm);

    console.log(this.profileForm.get('userName').value);
    this.user.userName = this.profileForm.get('userName').value;
    this.user.emailId = this.profileForm.get('emailId').value;
    this.user.contactNo = this.profileForm.get('contact').value;

    this.profileService.updateUser(this.user).subscribe((updateUser) => {
      this.user = updateUser;
      this.hideBtn = true;
      alert('User Update Successfully!!');
      this.router.navigate(['/products']);
    });
  }

  //Method for get all orders by User ID.
  getAllOrders() {
    this.transactionService
      .getAllOrdersByUserId(this.user.userId)
      .subscribe((allOrders) => (
        console.log('allorderss', allOrders),
        this.orders = allOrders));
      console.log(this.orders,"Profile orders");
      
  }
}