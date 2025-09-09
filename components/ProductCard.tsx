import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded p-2 flex flex-col">
      {product.image && (
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="object-cover"
        />
      )}
      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{product.price} MDL</p>
      <Link
        href={`/product/${product.slug}`}
        className="mt-auto text-blue-600 underline"
      >
        Подробнее
      </Link>
    </div>
  );
}
