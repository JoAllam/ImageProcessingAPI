import express from "express";
import { imagesFunc } from "../imagesFunc";

const images = express.Router();

imagesFunc(images);

export default images;
