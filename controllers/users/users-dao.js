import usersModel from "./users-model.js";

export const findUsers = () => usersModel.find();
export const findUserById = (uid) => usersModel.findById({ _id: uid });
export const findUserByUsername = (username) =>
  usersModel.findOne({ username });
export const findUserByCredentials = (username, password) =>
  usersModel.findOne({ username, password });
export const createUser = (user) => usersModel.create(user);
export const deleteUser = (uid) => usersModel.deleteOne({ _id: uid });
export const updateUser = (uid, user) =>
  usersModel.updateOne({ _id: uid }, { $set: user });
