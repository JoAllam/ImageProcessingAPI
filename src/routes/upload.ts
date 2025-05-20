import express from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";

const uploadPage = express.Router();

const imagesDir = fs.readdirSync(path.resolve(__dirname, "../../myPictures"));

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

uploadPage.post("/", upload.single("anime"), async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).send("No file was uploaded!");
      throw new Error("No file was uploaded!");
    }

    console.log(file);
    res
      .status(200)
      .send(
        `File Uploaded Successfully! \nAccess the file from here: <a href="${file.path}" class="">Image API URL</a>`,
      );
    next();
  } catch (err) {
    console.error(err);
  }
});
uploadPage.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    if (err.message === "Only JPG files are allowed") {
      next();
      res.status(400).send("Only JPG files are allowed!");
    } else if (err.message === "File already exists") {
      next();
      res.status(400).send("File already exists");
    } else {
      next();
      res.status(500).send("Something went wrong!");
    }
  },
);

export default uploadPage;
