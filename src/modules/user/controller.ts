import User from "./entities/User";
import { IUser } from "./interface";

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
        phone
      });
    } else if (user.name !== name) {
      user.name = name;
    }

    user.save();

    return user;
  }

  async getByPhone(phone: string): Promise<IUser | null> {
    const user = await User.findOne<IUser>({ phone }).exec();

    return user;
  }

  async saveCoins(phone: string, coins: string[]): Promise<void> {
    const user = await this.getByPhone(phone);

    if (!user) {
      throw new Error("User not found.");
    }

    user.coins = coins;

    user.save();
  }

  async saveTimeToUpdate(phone: string, timeToUpdate: number): Promise<void> {
    const user = await this.getByPhone(phone);

    if (!user) {
      throw new Error("User not found.");
    }

    user.timeToUpdate = timeToUpdate;

    user.save();
  }
}

export default UserController;
