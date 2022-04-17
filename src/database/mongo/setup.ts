import mongoose from "mongoose";
import config from "@/config";

class Mongo {
  static async setupMongoDb(): Promise<void> {
    await mongoose.connect(config.databaseUrl);
    console.info("Connected with database");
  }
}

export default Mongo;
