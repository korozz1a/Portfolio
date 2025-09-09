import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo Shop',
  description: 'Simple e-commerce MVP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
