import { Order } from './order';
import { User } from './user';
/**
 * Transaction DTO class.
 * @author sameer mandavia
 *
 * */
export class Transaction {
  public transactionId: number;
  public order: Order;
  public transactionTime: string;
  public user: User;
}
