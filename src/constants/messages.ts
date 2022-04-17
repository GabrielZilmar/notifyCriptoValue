export const instructions = {
  currency: `Type "coin" and the coin symbol to get the current price in BRL. Example: *COIN ETH*`,
  saveCoinsSymbol: `Type "save coins" and the coins symbol, separate by comma, to save your coins. Example: *SAVE COINS BTC, ETH* or *SAVE COINS ETH*`,
  saveTargetValue: `Type "X value" to save your target value preference for we notify you when your coin get this value. Example: *15000.00 value*.`,
  saveTargetValueOption: `Type "OPTION target value option" to save your target value preference. *OPTION* '>=' or '<=' (Default is __>=__). You will be notified according your option. Example: *>= target value option*`
};

export const defaultMessage = `
  Hello {{name}}, here are your options:
   ${instructions["currency"]}
   ${instructions["saveCoinsSymbol"]}
   ${instructions["saveTargetValue"]}
   ${instructions["saveTargetValueOption"]}
`;

export const catchError = (instruction: string) =>
  `Invalid input. Try again. ${
    instruction && `\n${instructions[instruction]}`
  }`;

export const cryptoInfoMessage = `
The current price of {{coinName}} is: R\${{coinPrice}}
`;
