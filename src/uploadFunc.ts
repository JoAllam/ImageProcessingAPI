import multer, { FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";
import express from "express";

const imagesDir = fs.readdirSync(path.resolve(__dirname, "../myPictures"));

console.log(imagesDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "myPictures/");
  },
  filename: (req, file, cb) => {
    const name = path.basename(file.originalname, ".jpg");
    cb(null, `${name}.jpg`);
  },
});

const filter = (
  req: express.Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
): void => {
  if (path.extname(file.originalname) === ".jpg") {
    if ((imagesDir as unknown as string[]).includes(file.originalname)) {
      cb(new Error("File already exists"));
    } else {
      cb(null, true);
    }
  } else {
    cb(new Error("Only JPG files are allowed"));
  }
};

const upload = multer({ storage: storage, fileFilter: filter });
export default upload;
