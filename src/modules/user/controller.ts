import User from "./entities/User";
import { IUser } from "./interface";
import Cryptography from "@/utils/Cryptography";

const USER_NOT_FOUND_ERROR = "User not found.";

class UserController {
  async upsert({
    name,
    phone
  }: {
    name: string;
    phone: string;
  }): Promise<IUser> {
    let user = await this.getByPhone(phone);

    if (!user) {
      user = new User({
        name,
        phone: Cryptography.encrypt(phone)
      });
    } else if (user.name !== name) {
      user.name = name;
    }

    await user.save();

    return user;
  }

  async getAllUsers(): Promise<IUser[]> {
    const users = await User.find<IUser>().exec();

    return users;
  }

  async getByPhone(phone: string): Promise<IUser | null> {
    const user = await User.findOne<IUser>({
      phone: Cryptography.encrypt(phone)
    }).exec();

    return user;
  }

  async saveCoins(phone: string, coins: string[]): Promise<void> {
    const user = await this.getByPhone(phone);

    if (!user) {
      throw new Error(USER_NOT_FOUND_ERROR);
    }

    user.coins = coins;

    await user.save();
  }

  async saveTargetValue(phone: string, targetValue: number): Promise<void> {
    const user = await this.getByPhone(phone);

    if (!user) {
      throw new Error(USER_NOT_FOUND_ERROR);
    }

    user.targetValue = targetValue;

    await user.save();
  }

  async toggleNeedNotify(phone: string): Promise<void> {
    const user = await this.getByPhone(phone);

    if (!user) {
      throw new Error(USER_NOT_FOUND_ERROR);
    }

    user.needNotify = !user.needNotify;

    await user.save();
  }

  // Todo: Delete user
}

export default UserController;
