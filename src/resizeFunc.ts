import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

export async function resizing(
  file: string,
  width: string,
  height: string,
): Promise<{
  name: string;
  path: string;
}> {
  file = path.basename(file);
  file = file.replaceAll("%20", " ");
  console.log(file);
  const oldFilePath = path.join(__dirname, "../myPictures", file);
  if (path.basename(file, ".jpg").includes("resized")) {
    const start = path.basename(file, ".jpg").indexOf("resized");
    file = file.slice(0, start);
  }
  let newFilename = path.join(
    path.basename(file, ".jpg") + ` resized - ${width}x${height}.jpg`,
  );
  newFilename = newFilename.replaceAll("%20", " ");
  const newFilePath = path.join(__dirname, "../myPictures", newFilename);
  const imageBuffer = await fs.readFile(oldFilePath);
  await sharp(imageBuffer)
    .resize(JSON.parse(width), JSON.parse(height))
    .toFile(newFilePath);
  setTimeout(() => {
    fs.rm(oldFilePath);
  }, 1000);
  return { name: newFilename, path: newFilePath };
}
