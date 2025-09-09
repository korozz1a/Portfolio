import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function CatalogPage() {
  return (
    <main className="p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
