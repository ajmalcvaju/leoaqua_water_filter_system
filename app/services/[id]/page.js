import ServiceDetailClient from './ServiceDetailClient';
import { servicesData } from '../servicesData';

export function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({
    id: String(id),
  }));
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id || 'purifier';
  return <ServiceDetailClient id={id} />;
}
