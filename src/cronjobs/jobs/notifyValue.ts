import { userController } from "@modules/user";
import CronjobBuilder from "@modules/cronjob/utils/CronjobBuilder";
import { cryptoInfo } from "@modules/cryptoInfo";
import { whatsAppBot } from "@modules/whatsAppBot";
import Cryptography from "@utils/Cryptography";

export default CronjobBuilder.new("notifyValueJob").register(async () => {
  const allUsers = await userController.getAllUsers();

  for await (const user of allUsers) {
    const { coins, phone, targetValue, needNotify } = user;
    const currentValue = await cryptoInfo.checkPrice(coins);

    const value = currentValue[0].price;
    if (Number(value) >= targetValue && needNotify) {
      whatsAppBot.sendFreeMessage(
        `The price of ${coins[0]} is R$${parseFloat(value).toFixed(2)}`,
        Cryptography.decrypt(phone)
      );

      userController.toggleNeedNotify(Cryptography.decrypt(phone));
    }
  }
});
