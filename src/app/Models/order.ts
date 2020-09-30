import { User } from './user';

import { ProductItem } from './product-item';
import { Store } from './store';
/**
 * Order DTO class.
 * @author sameer mandavia
 *
 * */

export class Order {
  public orderId: number;
  public totalAmount: number;
  public totalQuantity: number;
  public user: User;
  public cart: ProductItem;
  public store: Store;
  public time: string;
}
