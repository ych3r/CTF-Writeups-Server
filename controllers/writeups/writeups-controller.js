// import posts from "./writeups.js";
import * as writeupsDao from "./writeups-dao.js";

// let writeups = posts;

const createWriteup = async (req, res) => {
  const newWriteup = req.body;
  //   newWriteup._id = new Date().getTime() + "";
  newWriteup.date = new Date().toLocaleString("en-us", {
    timeZone: "EST",
  });
  newWriteup.liked = false;
  newWriteup.likes = 0;
  //   writeups.push(newWriteup);
  const insertedWriteup = await writeupsDao.createWriteup(newWriteup);
  res.json(insertedWriteup);
};

const findWriteups = async (req, res) => {
  const writeups = await writeupsDao.findWriteups();
  res.json(writeups);
};

const findWriteupsByCtfId = async (req, res) => {
  const writeupCidToFind = req.params.cid;
  const writeups = await writeupsDao.findWriteupsByCtfId(writeupCidToFind);
  res.json(writeups);
};

const updateWriteup = async (req, res) => {
  const writeupIdToUpdate = req.params.wid;
  const updates = req.body;
  //   const writeupIndex = writeups.findIndex((w) => w._id === writeupIdToUpdate);
  //   writeups[writeupIndex] = { ...writeups[writeupIndex], ...updates };
  const status = await writeupsDao.updateWriteup(writeupIdToUpdate, updates);
  //   res.sendStatus(200);
  res.json(status);
};

const deleteWriteup = async (req, res) => {
  const writeupIdToDelete = req.params.wid;
  const status = await writeupsDao.deleteWriteup(writeupIdToDelete);
  //   writeups = writeups.filter((w) => w._id !== writeupIdToDelete);
  //   res.sendStatus(200);
  res.json(status);
};

export default (app) => {
  app.post("/api/writeups", createWriteup);
  app.get("/api/writeups", findWriteups);
  app.get("/api/writeups/:cid", findWriteupsByCtfId);
  app.put("/api/writeups/:wid", updateWriteup);
  app.delete("/api/writeups/:wid", deleteWriteup);
};
