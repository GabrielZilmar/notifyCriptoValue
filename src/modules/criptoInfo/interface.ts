type I1d = {
  volume: string;
  price_change: string;
  price_change_pct: string;
  volume_change: string;
  volume_change_pct: string;
  market_cap_change: string;
  market_cap_change_pct: string;
};

type I30d = {
  volume: string;
  price_change: string;
  price_change_pct: string;
  volume_change: string;
  volume_change_pct: string;
  market_cap_change: string;
  market_cap_change_pct: string;
};

export interface ICryptoInfo {
  id: string;
  currency: string;
  symbol: string;
  name: string;
  logo_url: string;
  status: string;
  platform_currency: string;
  price: string;
  price_date: Date;
  price_timestamp: Date;
  circulating_supply: string;
  market_cap: string;
  market_cap_dominance: string;
  num_exchanges: string;
  num_pairs: string;
  num_pairs_unmapped: string;
  first_candle: Date;
  first_trade: Date;
  first_order_book: Date;
  rank: string;
  rank_delta: string;
  high: string;
  high_timestamp: Date;
  "1d": I1d;
  "30d": I30d;
}

export type ICurrenciesAvailable = "BRL" | "EUR";
