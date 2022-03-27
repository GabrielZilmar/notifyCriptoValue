import mongoose from "mongoose";
import config from "../config";

const setupMongoDb = async (): Promise<void> => {
  await mongoose.connect(config.databaseUrl);
  console.info("Connected with database");
};

export default setupMongoDb;
