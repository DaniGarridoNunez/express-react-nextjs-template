import mongoose from "mongoose";
import { Example } from "../models/Example";
import { connectDB } from "./db";

async function main(): Promise<void> {
  await connectDB();
  console.log("Seed script connected to the database!");

  const newExample = new Example({
    title: "Emperatriz de Etereos",
    pages: 2000,
    isAvailable: true,
  });

  const createdExample = await newExample.save();
  console.log(createdExample);
}

main()
  .then(() => {
    console.log("Seeding complete. Disconnecting from database.");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Seeding failed:", err);
    mongoose.disconnect();
    process.exit(1);
  });
