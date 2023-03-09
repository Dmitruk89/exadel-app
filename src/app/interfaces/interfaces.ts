export interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  img: string;
}
export interface Cart {
  products: Product[];
}
