"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadFunc_1 = __importDefault(require("../uploadFunc"));
const uploadPage = express_1.default.Router();
uploadPage.post(
  "/",
  uploadFunc_1.default.single("anime"),
  async (req, res, next) => {
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
uploadPage.use((err, req, res, next) => {
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
});
exports.default = uploadPage;
