import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    username: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    isAdmin: {type: Boolean, default: false},
    role: {
      type: String,
      default: "user",
      enum: ["admin", "user", "moderator"]
    }
  },
  { collection: "users" }
);

export default usersSchema;
