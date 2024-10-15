import express from "express";
import { getStore } from "../controller/store.controller.js";

const router = express.Router()

router.get('/',getStore)

export default router;
