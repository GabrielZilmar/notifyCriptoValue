import axios from "axios";
import config from "../../config";
import { ICryptoInfo } from "./interface";

class Listener {
  private privateKey: string;
  private coins: string[];

  constructor(coins?: string[]) {
    this.privateKey = config.nomicsApiKey;
    this.coins = coins || ["ETH"];
  }

  async start() {}

  checkPrice = async (): Promise<ICryptoInfo[]> => {
    const response = await axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${this.privateKey}&ids=${this.coins}&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1`
      )
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });

    return response;
  };
}

export default Listener;
