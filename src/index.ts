import { httpServer } from "./modules/httpServer";
import setupDb from "./database/setup";

const main = async () => {
  await httpServer.start();
  await setupDb();
};

main();
