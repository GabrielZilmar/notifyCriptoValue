import config from "../../config";
import { ICryptoInfo } from "./interface";
import { getCryptoInfo } from "./controller";

class CryptoInfo {
  private privateKey: string;
  private coins: string[];

  constructor(coins?: string[]) {
    this.privateKey = config.nomicsApiKey;
    this.coins = coins || ["ETH"];
  }

  checkPrice = async (): Promise<ICryptoInfo[]> =>
    getCryptoInfo(this.privateKey, this.coins);
}

export default CryptoInfo;
