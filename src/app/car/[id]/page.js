import CarDetailClient from './CarDetailClient';

export default async function CarDetailPage({ params }) {
  const { id } = await params;
  return <CarDetailClient id={id} />;
}
