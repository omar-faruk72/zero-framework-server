import { MongoClient } from "mongodb";
import config from "./index.js";


const client = new MongoClient(config.mongodb_str);

let db;

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected Successfully");

    db = client.db("zero_framework_server"); 
  } catch (error) {
    console.error(" MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export const getDB = () => db;