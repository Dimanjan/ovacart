export type Product = {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  image: string;
  description: string;
  source: string;
};

export type ProductData = {
  store: string;
  currency: string;
  products: Product[];
};
