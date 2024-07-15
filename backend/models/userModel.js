import mongoose from "mongoose";
// import { stringify } from "uuid";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});


