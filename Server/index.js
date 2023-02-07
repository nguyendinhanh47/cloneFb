import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import users from "./routers/users.js"

const app = express()
const PORT = 8080;

const URL = "mongodb+srv://system123:system123@cluster0.wofxznq.mongodb.net/test"

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

app.use("/users", users);

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
