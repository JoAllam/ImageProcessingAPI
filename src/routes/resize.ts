import express from "express";
import { resizeFunc } from "../resizeFunc";

const resize = express.Router();

resizeFunc(resize);

export default resize;
