import mongoose from "mongoose";
import { IUser } from "../interface";

const userSchema = new mongoose.Schema<IUser>({
  name: String,
  phone: { type: String, unique: true },
  timeToUpdate: { type: Number, default: 12 * 60 * 60 }, // In seconds
  coins: { type: [String], default: ["ETH"] }
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
