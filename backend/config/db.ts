import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

const URL = process.env.MONGO_URI;

export async function connectDB() {
  if (!URL) {
    throw new Error("MONGO_URI env not found");
  }

  await mongoose.connect(URL);
}
