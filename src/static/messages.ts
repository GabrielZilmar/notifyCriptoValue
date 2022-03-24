export const instructions = {
  currency: `Type "coin" and the coin symbol to get the current price in BRL. Example: *COIN ETH*`,
  coinsSymbol: `Type the "save coins" and the coins symbol, separate by comma, to save your coins. Example: *SAVE COINS BTC, ETH* or *SAVE COINS ETH*`,
  saveCoinsSymbol: `Type X seconds to save your update time preference in seconds. Example: *3600 seconds*.`
};

export const defaultMessage = `
  Hello {{name}}, here are your options:
   ${instructions["currency"]}
   ${instructions["coinsSymbol"]}
   ${instructions["saveCoinsSymbol"]}
`;

export const catchError = (instruction: string) =>
  `Invalid input. Try again. ${instruction[instruction] || ""}`;

export const cryptoInfoMessage = `
The current price of {{coinName}} is: R\${{coinPrice}}
`;
