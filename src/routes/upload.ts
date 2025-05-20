import express from "express";
import { uploadFunc } from "./uploadFunc";

const uploadPage = express.Router();

uploadFunc(uploadPage);

export default uploadPage;
