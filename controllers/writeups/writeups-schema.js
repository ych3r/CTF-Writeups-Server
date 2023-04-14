import mongoose from "mongoose";

const writeupsSchema = mongoose.Schema(
  {
    date: String,
    ctf: String,
    problem: String,
    username: String,
    writeup: String,
    likes: Number,
    liked: Boolean,
  },
  { collection: "writeups" }
);

export default writeupsSchema;
