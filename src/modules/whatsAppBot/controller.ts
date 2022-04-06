import {
  catchError,
  cryptoInfoMessage,
  defaultMessage
} from "@/constants/messages";
import { cryptoInfo } from "../cryptoInfo";
import { IMessageInfo } from "./interface";
import Formatter from "@/utils/Formatter";
import { userController } from "../user";

class WhatsAppBotController {
  private async processGetCoinValueAction(message: string): Promise<string> {
    const coins = message.replace("COIN ", "").split(",");
    const coinInfos = (await cryptoInfo.checkPrice(coins))[0];

    if (coinInfos) {
      return Formatter.formatCryptoInfoMessage(cryptoInfoMessage, coinInfos);
    }

    return catchError("currency");
  }

  private async processSaveCoinAction(
    message: string,
    phone: string
  ): Promise<string> {
    const coins = message.replace("SAVE COINS ", "").split(",");

    const allCoinsValid = await cryptoInfo.validateCoins(coins);
    if (!allCoinsValid) {
      return catchError("saveCoinsSymbol");
    }

    await userController.saveCoins(phone, coins);

    return "Coins saved successfully";
  }

  private async processSaveTargetValueAction(message, phone): Promise<string> {
    const targetValue = parseFloat(message.replace(" SECONDS", ""));

    if (isNaN(targetValue)) {
      return catchError("saveTargetValue");
    }

    await userController.saveTargetValue(phone, targetValue);

    return "Target value saved successfully";
  }

  async processMessage(messageInfo: IMessageInfo): Promise<string> {
    const body = messageInfo.Body.toUpperCase();

    let message = Formatter.formatDefaultMessage(defaultMessage, messageInfo);

    const userData = {
      name: messageInfo.ProfileName,
      phone: messageInfo.WaId
    };

    await userController.upsert(userData);

    if (body.startsWith("COIN ")) {
      message = await this.processGetCoinValueAction(body);
    } else if (body.startsWith("SAVE COINS ")) {
      message = await this.processSaveCoinAction(body, userData.phone);
    } else if (body.endsWith(" VALUE")) {
      message = await this.processSaveTargetValueAction(body, userData.phone);
    }

    return message;
  }
}

export default WhatsAppBotController;
