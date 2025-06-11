"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizing = resizing;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
async function resizing(file, width, height) {
  file = path_1.default.basename(file);
  file = file.replaceAll("%20", " ");
  console.log(file);
  const oldFilePath = path_1.default.join(__dirname, "../myPictures", file);
  if (path_1.default.basename(file, ".jpg").includes("resized")) {
    const start = path_1.default.basename(file, ".jpg").indexOf("resized");
    file = file.slice(0, start);
  }
  let newFilename = path_1.default.join(
    path_1.default.basename(file, ".jpg") + ` resized - ${width}x${height}.jpg`,
  );
  newFilename = newFilename.replaceAll("%20", " ");
  const newFilePath = path_1.default.join(
    __dirname,
    "../myPictures",
    newFilename,
  );
  const imageBuffer = await promises_1.default.readFile(oldFilePath);
  await (0, sharp_1.default)(imageBuffer)
    .resize(JSON.parse(width), JSON.parse(height))
    .toFile(newFilePath);
  setTimeout(() => {
    promises_1.default.rm(oldFilePath);
  }, 1000);
  return { name: newFilename, path: newFilePath };
}
