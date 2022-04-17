import { userController } from "@modules/user";
import CronjobBuilder from "@modules/cronjob/utils/CronjobBuilder";
import Cryptography from "@utils/Cryptography";

const SCHEDULE_TIME = "* 15 * * *  *";

export default CronjobBuilder.new("notifyValueJob")
  .setScheduleTime(SCHEDULE_TIME)
  .register(async () => {
    const allUsers = await userController.getAllUsers();

    for await (const user of allUsers) {
      const { phone } = user;

      userController.toggleNeedNotify(Cryptography.decrypt(phone));
    }
  });
