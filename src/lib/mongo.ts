import { MongoClient } from 'mongodb'

console.log('MONGO URI:', process.env.MONGODB_URI)
const uri = process.env.MONGODB_URI

if (!uri) {
    throw new Error('❌ MONGODB_URI is not defined')
}

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
}

clientPromise = global._mongoClientPromise

export default clientPromise
