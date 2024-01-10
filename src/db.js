import mongoose from "mongoose";
import { MONGO_PRIVATE_URL } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_PRIVATE_URL);
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};
