import config from "../../config";
import { ICryptoInfo } from "./interface";
import { getCryptoInfo } from "./controller";

class CryptoInfo {
  private privateKey: string;

  constructor() {
    this.privateKey = config.nomicsApiKey;
  }

  checkPrice = async (coins: string[] = ["ETH"]): Promise<ICryptoInfo[]> =>
    getCryptoInfo(this.privateKey, coins);
}

export default CryptoInfo;
