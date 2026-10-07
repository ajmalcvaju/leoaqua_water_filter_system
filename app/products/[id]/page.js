import ProductDetailClient from './ProductDetailClient';
import { productsData } from '../productsData';

export function generateStaticParams() {
  return Object.keys(productsData).map((id) => ({
    id: String(id),
  }));
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id || '6';
  return <ProductDetailClient id={id} />;
}
