import express from "express";
import sharp from "sharp";
import multer from "multer";
import path from "path";
import fs from "fs/promises";

export async function resizing(
  file: string,
  width: string,
  height: string,
): Promise<string> {
  file = path.basename(file);
  file = file.replaceAll("%20", " ");
  console.log(file);
  const oldFilePath = path.join(__dirname, "../../myPictures", file);
  if (path.basename(file, ".jpg").includes("resized")) {
    const start = path.basename(file, ".jpg").indexOf("resized");
    file = file.slice(0, start);
  }
  let newFilename = path.join(
    path.basename(file, ".jpg") + ` resized - ${width}x${height}.jpg`,
  );
  newFilename = newFilename.replaceAll("%20", " ");
  const newFilePath = path.join(__dirname, "../../myPictures", newFilename);
  const imageBuffer = await fs.readFile(oldFilePath);
  await sharp(imageBuffer)
    .resize(JSON.parse(width), JSON.parse(height))
    .toFile(newFilePath);
  setTimeout(() => {
    fs.rm(oldFilePath);
  }, 1000);
  return newFilename;
}

export function resizeFunc(router: express.Router): void {
  router.post(
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
        let file = await resizing(
          req.body.resize,
          req.body.width,
          req.body.height,
        );
        res
          .status(200)
          .send(
            `Image resized successfully! \nAccess the file from here: <a href="/myPictures/${file}" class="">Image API URL</a>`,
          );
      } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong!");
      }
    },
  );
}
