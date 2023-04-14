import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    username: String,
    type: String,
  },
  { collection: "users" }
);

export default usersSchema;
