import express from "express";
import fs from "fs";
import path from "path";

const images = express.Router();

images.get("/", (req: express.Request, res: express.Response): void => {
  res.set("Cache-Control", "no-store");
  const imagesPath = path.resolve(__dirname, "../myPictures");
  fs.readdir(imagesPath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error with loading gallery");
    } else {
      res.status(200).json(data);
    }
  });
});
export default images;
