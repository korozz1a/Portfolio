import { products } from '@/data/products';
interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return <main className="p-6">Товар не найден</main>;
  }
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="mb-2">Цена: {product.price} MDL</p>
    </main>
  );
}
