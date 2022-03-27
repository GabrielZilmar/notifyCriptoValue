// TODO: Job to run each 10 minutes to set user notifiable again
import { userController } from "../../modules/user";
import CronjobBuilder from "../../modules/cronjob/utils/CronjobBuilder";

export default CronjobBuilder.new("notifyValueJob")
  .setScheduleTime("* 15 * * *  *")
  .register(async () => {
    const allUsers = await userController.getAllUsers();

    for await (let user of allUsers) {
      const { phone } = user;

      userController.toggleNeedNotify(phone);
    }
  });
