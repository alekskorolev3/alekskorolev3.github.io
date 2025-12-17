import clientPromise from '@/lib/mongo'

export async function GET() {
    const client = await clientPromise
    const db = client.db("flowautodb")

    const items = await db
        .collection('requests')
        .find()
        .sort({ createdAt: -1 })
        .limit(10)
        .toArray()

    return Response.json(items)
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, phone, email, message } = body

        if (!name || !phone) {
            return new Response(JSON.stringify({ error: 'Name and phone are required' }), { status: 400 })
        }

        const client = await clientPromise
        const db = client.db('flowautodb')

        const newRequest = {
            name,
            phone,
            email: email || '',
            message: message || '',
            status: 'NEW',
            createdAt: new Date()
        }

        const result = await db.collection('requests').insertOne(newRequest)

        // Отправляем уведомление боту
        const BOT_TOKEN = process.env.BOT_TOKEN
        const ADMIN_IDS = process.env.ADMIN_IDS?.split(',') || []

        if (BOT_TOKEN) {
            const fetchBody = {
                chat_id: null,
                text: ''
            }

            ADMIN_IDS.forEach(async (id) => {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: id,
                        text: `📥 Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email || '-'}\nСообщение: ${message || '-'}`
                    })
                })
            })
        }

        return new Response(JSON.stringify({ success: true, id: result.insertedId }), { status: 201 })
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
    }
}
