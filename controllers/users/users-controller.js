// import people from "./users.js";
import * as usersDao from "./users-dao.js";

const findUsers = async (req, res) => {
  const users = await usersDao.findUsers();
  res.json(users);
};

const findUserById = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersDao.findUserById(userId);
  res.json(user);
};

const createUser = async (req, res) => {
  const newUser = req.body;
  const insertedUser = await usersDao.createUser(newUser);
  res.json(insertedUser);
};

const deleteUser = async (req, res) => {
  const userId = req.params.uid;
  const status = await usersDao.deleteUser(userId);
  res.json(status);
};

const updateUser = async (req, res) => {
  const userId = req.params.uid;
  const updates = req.body;
  const status = await usersDao.updateUser(userId, updates);
  res.json(status);
};

export default (app) => {
  app.get("/api/users", findUsers);
  app.get("/api/users/:uid", findUserById);
  app.post("/api/users", createUser);
  app.delete("/api/users/:uid", deleteUser);
  app.put("/api/users/:uid", updateUser);
};
