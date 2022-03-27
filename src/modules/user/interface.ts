import { Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  phone: string;
  targetValue: number;
  coins: string[];
  needNotify: boolean;
  __v: number;
}
