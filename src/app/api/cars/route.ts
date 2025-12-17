import clientPromise from '@/lib/mongo';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('flowautodb');

        const cars = await db.collection('cars').find({}).toArray();

        return new Response(JSON.stringify(cars), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Ошибка получения автомобилей' }), { status: 500 });
    }
}
