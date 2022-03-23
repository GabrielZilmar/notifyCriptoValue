import { cryptoInfoMessage, defaultMessage } from "../../static/messages";
import { cryptoInfo } from "../cryptoInfo";
import { IMessageInfo } from "./interface";
import {
  formatDefaultMessage,
  formatCryptoInfoMessage
} from "../../utils/formatValue";
import { userController } from "../user";

class WhatsAppBotController {
  async processMessage(messageInfo: IMessageInfo): Promise<string> {
    let message = formatDefaultMessage(defaultMessage, messageInfo);

    if (messageInfo.Body.toUpperCase().includes("ETH")) {
      const coinInfos = (await cryptoInfo.checkPrice())[0];
      message = formatCryptoInfoMessage(cryptoInfoMessage, coinInfos);
    }

    const userData = {
      name: messageInfo.ProfileName,
      phone: messageInfo.WaId
    };

    await userController.upsert(userData);

    return message;
  }
}

export default WhatsAppBotController;
