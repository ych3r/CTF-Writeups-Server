import writeupsModel from "./writeups-model.js";

export const findWriteups = () => writeupsModel.find();
export const createWriteup = (writeup) => writeupsModel.create(writeup);
export const deleteWriteup = (wid) => writeupsModel.deleteOne({ _id: wid });
export const updateWriteup = (wid, writeup) =>
  writeupsModel.updateOne({ _id: wid }, { $set: writeup });
