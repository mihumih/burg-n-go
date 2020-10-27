export interface ProductsCategory {
  label: string;
  products: Product[];
}

export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  badge: boolean;
}