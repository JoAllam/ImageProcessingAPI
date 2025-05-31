"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const resizeFunc_1 = require("../resizeFunc");
const resize = express_1.default.Router();
resize.post("/", (0, multer_1.default)().none(), async (req, res) => {
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
    const file = await (0, resizeFunc_1.resizing)(
      req.body.resize,
      req.body.width,
      req.body.height,
    );
    const filename = file.name;
    res
      .status(200)
      .send(
        `Image resized successfully! \nAccess the file from here: <a href="/myPictures/${filename}" class="">Image API URL</a>`,
      );
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
});
exports.default = resize;
