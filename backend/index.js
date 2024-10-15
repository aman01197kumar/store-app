import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import storeRoute from "./routes/store.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());



dotenv.config();
const PORT = process.env.PORT || 4001;
const uri = process.env.MONGODBURI;

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected....");
} catch (err) {
  console.log(err);
}

//defining routes

app.use("/store", storeRoute);
app.use("/user", userRoute);
app.listen(PORT, () => console.log("port", PORT));
