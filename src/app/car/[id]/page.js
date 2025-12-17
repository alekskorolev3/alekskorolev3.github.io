import CarDetailClient from './CarDetailClient'
import clientPromise from '@/lib/mongo'

export async function generateStaticParams() {
  const client = await clientPromise
  const db = client.db('flowautodb')

  const cars = await db
      .collection('cars')
      .find({}, { projection: { _id: 1 } })
      .toArray()

  return cars.map((car) => ({
    id: car._id.toString(),
  }))
}

export default function CarDetailPage({ params }) {
  return <CarDetailClient id={params.id} />
}
