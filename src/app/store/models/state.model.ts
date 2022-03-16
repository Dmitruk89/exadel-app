import { IProduct } from './product.model';

export interface State {
  readonly products: Array<IProduct>;
}
