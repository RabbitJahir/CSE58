import "dotenv/config";
import express from "express";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;
const EDIT_PASSWORD = process.env.EDIT_PASSWORD;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is missing in env");
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };

  const client = new MongoClient(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
  await client.connect();
  const db = client.db("learningDB_S_12");

  cachedClient = client;
  cachedDb = db;

  console.log("✅ MongoDB CONNECTED (serverless-optimized)");
  return { client, db };
}

app.get("/save", async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("calendar_data");
    const data = await collection.find().sort({ date: 1 }).toArray();
    res.json(data);
  } catch (err) {
    console.error("❌ GET /save error:", err.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.post("/save", async (req, res) => {
  try {
    const { date, subjectCode, topic, homework, notes, status } = req.body;
    if (!date || !subjectCode)
      return res.status(400).json({ error: "Missing date or subjectCode" });

    const { db } = await connectToDatabase();
    const collection = db.collection("calendar_data");

    const result = await collection.updateOne(
      { date, subjectCode },
      { $set: { topic, homework, notes, status, updatedAt: new Date() } },
      { upsert: true }
    );

    console.log("📝 Update result:", result);
    res.json({ success: true });
  } catch (err) {
    console.error("❌ POST /save error:", err.message);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.post("/verify-password", (req, res) => {
  res.json({ authorized: req.body.password === EDIT_PASSWORD });
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () =>
    console.log(`🚀 Server running locally at http://localhost:${PORT}`)
  );
}

export default app;
