import { ProductItem } from './product-item';

/**
 * Store DTO class.
 * @author sameer mandavia
 *
 * */
export class Store {
  public storeId: number;
  public ownerName: string;
  public accountBalance: number;
  public menu: ProductItem[];
}
