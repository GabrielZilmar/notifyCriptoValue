import mongoose from "mongoose";
import { IUser } from "../interface";

const userSchema = new mongoose.Schema<IUser>({
  name: String,
  phone: { type: String, unique: true },
  targetValue: Number,
  coins: { type: [String], default: ["ETH"] },
  needNotify: { type: Boolean, default: true },
  targetValueOption: { type: String, enum: ["LE", "GE"], default: "GE" }
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
