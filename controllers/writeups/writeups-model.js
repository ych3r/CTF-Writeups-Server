import mongoose from "mongoose";
import writeupsSchema from "./writeups-schema.js";

const writeupsModel = mongoose.model("WriteupModel", writeupsSchema);

export default writeupsModel;
