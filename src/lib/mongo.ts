import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import * as path from "node:path";

dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

const uri = process.env.MONGODB_URI
let client: MongoClient
let clientPromise: Promise<MongoClient>
if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
}

clientPromise = global._mongoClientPromise

export default clientPromise
