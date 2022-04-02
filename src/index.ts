import { httpServer } from "./modules/httpServer";
import { cronjob } from "./modules/cronjob";
import Mongo from "./database/mongo/setup";

const main = async () => {
  await httpServer.start();
  await Mongo.setupMongoDb();
  await cronjob.start();
};

main();
