import { httpServer } from "./modules/httpServer";
import setupDb from "./database/setup";
import { cronjob } from "./modules/cronjob";

const main = async () => {
  await httpServer.start();
  await setupDb();
  await cronjob.start();
};

main();
