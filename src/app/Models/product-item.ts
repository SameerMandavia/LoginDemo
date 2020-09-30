import { Order } from './order';
import { Store } from './store';

/**
 * ProductItem DTO class.
 * @author sameer mandavia
 *
 * */
export class ProductItem {
  public productItemId: number;
  public productName: string;
  public productType: string;
  public amount: number;
  public orders: Order;
  public store: Store;
}
