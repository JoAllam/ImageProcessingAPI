import express from "express";
import upload from "../uploadFunc";

const uploadPage = express.Router();

uploadPage.post(
  "/",
  upload.single("anime"),
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): Promise<void> => {
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
  },
);
uploadPage.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): void => {
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
