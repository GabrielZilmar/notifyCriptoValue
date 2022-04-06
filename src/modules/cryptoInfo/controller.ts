import request from "@services/request";
import { ICryptoInfo, ICurrenciesAvailable } from "./interface";

class CryptoInfoController {
  private makeUrl = (
    privateKey: string,
    coins: string[],
    currency: ICurrenciesAvailable
  ): string =>
    `https://api.nomics.com/v1/currencies/ticker?key=${privateKey}&ids=${coins}&interval=1d,30d&convert=${currency}`;

  async getCryptoInfo(
    privateKey: string,
    coins: string[],
    currency: ICurrenciesAvailable = "BRL"
  ): Promise<ICryptoInfo[]> {
    const cryptos = await request<ICryptoInfo[]>(
      "GET",
      this.makeUrl(privateKey, coins, currency)
    );

    return cryptos;
  }
}

export default CryptoInfoController;
