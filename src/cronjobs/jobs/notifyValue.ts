import { userController } from "../../modules/user";
import CronjobBuilder from "../../modules/cronjob/utils/CronjobBuilder";
import { cryptoInfo } from "../../modules/cryptoInfo";
import { whatsAppBot } from "../../modules/whatsAppBot";

export default CronjobBuilder.new("notifyValueJob").register(async () => {
  const allUsers = await userController.getAllUsers();

  for await (let user of allUsers) {
    const { coins, phone, targetValue } = user;
    const currentValue = await cryptoInfo.checkPrice(coins);

    const value = Number(currentValue[0].price);
    if (value >= targetValue) {
      whatsAppBot.sendFreeMessage(
        `The price of ${coins[0]} is R\$${value}`,
        phone
      );
    }
  }
});
