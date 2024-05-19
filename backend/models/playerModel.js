import mongoose from "mongoose";
import { stringify } from "uuid";

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
  },
  isCoach: {
    type: Boolean,
    default: false,
  },
  team: {
    type: String,
  },
  speed: {
    type: Number,
    enum: [1, 2, 3],
  },
});
