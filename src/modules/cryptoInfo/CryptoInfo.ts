import config from "../../config";
import { ICryptoInfo } from "./interface";
import { cryptoInfoController } from ".";

class CryptoInfo {
  private privateKey: string;

  constructor() {
    this.privateKey = config.nomicsApiKey;
  }

  checkPrice = async (coins: string[] = ["ETH"]): Promise<ICryptoInfo[]> =>
    cryptoInfoController.getCryptoInfo(this.privateKey, coins);

  validateCoins = async (coins: string[]): Promise<boolean> => {
    const coinsValues = await this.checkPrice(coins);

    return coinsValues.length === coins.length;
  };
}

export default CryptoInfo;
