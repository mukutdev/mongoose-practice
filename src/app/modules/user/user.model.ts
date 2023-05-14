import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  roll: { type: Number, required: true },
  address: {
    country: { type: String, required: true },
    city: { type: String },
    roadNo: { type: String },
  },
  gender: { type: String, enum: ["male", "female"] },
  dob: { type: String, required: true },
});

userSchema.method("getLocation", function getLocation() : string {
    return this.address.country + " " + this.address.city;
  });
  


const User = model<IUser, UserModel>('User', userSchema);

export default User;
