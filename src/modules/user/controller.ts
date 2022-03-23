import User from "./entities/User";
import { IUser } from "./interface";

class UserController {
  //  TODO: return an Either
  async upsert({
    name,
    phone
  }: {
    name: string;
    phone: string;
  }): Promise<void> {
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
  }

  async getByPhone(phone: string): Promise<IUser> {
    const user = await User.findOne<IUser>({ phone }).exec();

    return user;
  }
}

export default UserController;
