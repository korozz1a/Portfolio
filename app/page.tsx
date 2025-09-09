import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Интернет-магазин</h1>
      <Link className="text-blue-600 underline" href="/catalog">
        Перейти в каталог
      </Link>
    </main>
  );
}
