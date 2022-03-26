import { cryptoInfo } from "../../modules/cryptoInfo";
import { whatsAppBot } from "../../modules/whatsAppBot";

const GET_REQUESTS_PER_SECOND = 10;

setInterval(async () => {
  const coinInfos = await cryptoInfo.checkPrice();

  for await (let info of coinInfos) {
    const message = `The current price of ${info.name} is: R$${parseFloat(
      info.price
    ).toFixed(2)}`;

    whatsAppBot.sendFreeMessage(message, "+553899731516");
  }
}, GET_REQUESTS_PER_SECOND * 1000);
