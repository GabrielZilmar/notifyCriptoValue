import { cryptoInfoMessage, defaultMessage } from "../../static/messages";
import { cryptoInfo } from "../cryptoInfo";
import { IMessageInfo } from "./interface";
import { formatDefaultMessage, formatCryptoInfoMessage } from "./utils";

class WhatsAppBotController {
  async processMessage(messageInfo: IMessageInfo): Promise<string> {
    let message = formatDefaultMessage(defaultMessage, messageInfo);

    if (messageInfo.Body.toUpperCase().includes("ETH")) {
      const coinInfos = (await cryptoInfo.checkPrice())[0];
      message = formatCryptoInfoMessage(cryptoInfoMessage, coinInfos);
    }

    return message;
  }
}

export default WhatsAppBotController;
