import express from "express";
import cors from "cors";
import session from "express-session";
import UserController from "./controllers/users/users-controller.js";
import WriteupsController from "./controllers/writeups/writeups-controller.js";
import AuthController from "./controllers/users/auth-controller.js";
import CTFsController from "./controllers/ctf/ctf-controller.js";

import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/ctf-writeups");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
const port = process.env.PORT || 4000;
app.use(
  session({
    secret: "this_is_a_secret",
    resave: false,
    saveUninitialized: true,
  })
);

WriteupsController(app);
UserController(app);
AuthController(app);
CTFsController(app);
app.listen(4000);
