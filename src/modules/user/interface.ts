import { Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  phone: string;
  targetValue: number;
  coins: string[];
  needNotify: boolean;
  targetValueOption: "LE" | "GE"; // LE = less than or equal to . GE = greater than or equal to
  __v: number;
}
