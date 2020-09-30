import { Order } from '../Models/order';
/**
 * User DTO class.
 * @author sameer mandavia
 *
 * */

export class User {
  public userId: number;
  public userName: string;
  public emailId: string;
  public password: string;
  public gender: string;
  public contactNo: string;
  public walletAmount: number;
  public orders: Order;
}
