import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { MONGO_URI } from "../config";
mongoose.connect(MONGO_URI);
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
export const generateHash = async (password: string) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const validateHash = async (
  candidatePassword: string,
  hashedPassword: string,
) => {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};
