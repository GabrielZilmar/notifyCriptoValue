import { httpServer } from "./modules/httpServer";

const main = async () => {
  await httpServer.start();
};

main();
