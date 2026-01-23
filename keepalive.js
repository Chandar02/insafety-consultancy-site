import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ No MongoDB URI found. Check .env.local");
  process.exit(1);
}

const client = new MongoClient(uri);

async function keepAlive() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(`✅ MongoDB Keepalive ping successful at ${new Date().toISOString()}`);
  } catch (err) {
    console.error("❌ MongoDB Keepalive failed:", err);
  } finally {
    await client.close();
  }
}

keepAlive();
