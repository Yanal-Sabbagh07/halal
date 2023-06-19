import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  confirm: {
    type: String,
    required: [true, "confirmation is required"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
