import { userController } from "../../modules/user";
import CronjobBuilder from "../../modules/cronjob/utils/CronjobBuilder";
import Cryptography from "../../utils/Cryptography";

export default CronjobBuilder.new("notifyValueJob")
  .setScheduleTime("* 15 * * *  *")
  .register(async () => {
    const allUsers = await userController.getAllUsers();

    for await (let user of allUsers) {
      const { phone } = user;

      userController.toggleNeedNotify(Cryptography.decrypt(phone));
    }
  });
