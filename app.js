import express from "express";
import cors from "cors";
import UserController from "./controllers/users/users-controller.js";
import writeupsController from "./controllers/writeups/writeups-controller.js";

import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/ctf-writeups");

const app = express();
app.use(cors());
app.use(express.json());
writeupsController(app);
UserController(app);
app.listen(4000);
