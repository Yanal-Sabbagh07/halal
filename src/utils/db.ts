import mongoose from "mongoose";

const { MONGO_DB } = process.env;

if (!MONGO_DB) {
  throw new Error("Invalid environment variable: MONGO_DB");
}
export const connectToMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_DB);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
