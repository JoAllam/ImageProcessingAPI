import express from "express";
import multer from "multer";
import { resizing } from "../resizeFunc";

const resize = express.Router();

resize.post(
  "/",
  multer().none(),
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      if (!req.body.resize) {
        console.log(req.body);
        console.log(req.body.resize);
        res.status(400).send("No File Uploaded");
        return;
      } else if (!req.body.width) {
        console.log(req.body);
        console.log(req.body.width);
        res.status(400).send("No width determined");
        return;
      } else if (!req.body.height) {
        console.log(req.body);
        console.log(req.body.height);
        res.status(400).send("No height determined");
        return;
      }
      const file = await resizing(
        req.body.resize,
        req.body.width,
        req.body.height,
      );
      const filename: string = file.name;
      res
        .status(200)
        .send(
          `Image resized successfully! \nAccess the file from here: <a href="/myPictures/${filename}" class="">Image API URL</a>`,
        );
    } catch (err) {
      console.error(err);
      res.status(500).send("Something went wrong!");
    }
  },
);
export default resize;
