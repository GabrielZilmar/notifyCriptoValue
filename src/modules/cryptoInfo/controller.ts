import request from "../../services/request";
import { ICryptoInfo, ICurrenciesAvailable } from "./interface";

export const getCryptoInfo = async (
  privateKey: string,
  coins: string[],
  currency: ICurrenciesAvailable = "BRL"
): Promise<ICryptoInfo[]> => {
  const cryptos = await request<ICryptoInfo[]>(
    "GET",
    makeUrl(privateKey, coins, currency)
  );

  return cryptos;
};

const makeUrl = (
  privateKey: string,
  coins: string[],
  currency: ICurrenciesAvailable
): string =>
  `https://api.nomics.com/v1/currencies/ticker?key=${privateKey}&ids=${coins}&interval=1d,30d&convert=${currency}&platform-currency=ETH&per-page=100&page=1`;
