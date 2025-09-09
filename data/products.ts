export interface Product {
  id: number;
  slug: string;
  title: string;
  price: number;
  image?: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'sample-product',
    title: 'Пример товара',
    price: 1000,
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 2,
    slug: 'another-product',
    title: 'Другой товар',
    price: 1500,
    image: 'https://via.placeholder.com/300'
  }
];
