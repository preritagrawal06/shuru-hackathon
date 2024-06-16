import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8080;
export const MONGO_URI = process.env.MONGO_URI ?? "your_mongo_uri";
export const SECRET = process.env.JWT_SECRET ?? "your_secret_key";