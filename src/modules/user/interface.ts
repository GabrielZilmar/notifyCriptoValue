import { Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  phone: string;
  timeToUpdate: number;
  coins: String[];
}
