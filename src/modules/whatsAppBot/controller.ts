import {
  catchError,
  cryptoInfoMessage,
  defaultMessage
} from "../../static/messages";
import { cryptoInfo } from "../cryptoInfo";
import { IMessageInfo } from "./interface";
import {
  formatDefaultMessage,
  formatCryptoInfoMessage
} from "../../utils/formatValue";
import { userController } from "../user";

class WhatsAppBotController {
  async processMessage(messageInfo: IMessageInfo): Promise<string> {
    const body = messageInfo.Body.toUpperCase();

    let message = formatDefaultMessage(defaultMessage, messageInfo);

    const userData = {
      name: messageInfo.ProfileName,
      phone: messageInfo.WaId
    };

    await userController.upsert(userData);

    if (body.startsWith("COIN ")) {
      const coins = body.replace("COIN ", "").split(",");
      const coinInfos = (await cryptoInfo.checkPrice(coins))[0];
      console.log(coinInfos);
      if (coinInfos) {
        message = formatCryptoInfoMessage(cryptoInfoMessage, coinInfos);
      } else {
        message = catchError("currency");
      }
    } else if (body.startsWith("SAVE COINS ")) {
      const coins = body.replace("SAVE COINS ", "").split(",");
      // TODO: Verify coins
      await userController.saveCoins(userData.phone, coins);
      message = "Coins saved successfully";
    } else if (body.endsWith(" SECONDS")) {
      const timeToUpdate = parseInt(body.replace(" SECONDS", ""), 10);
      await userController.saveTimeToUpdate(userData.phone, timeToUpdate);
    }

    return message;
  }
}

export default WhatsAppBotController;
