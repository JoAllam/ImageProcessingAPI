"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function imagesFunc(router) {
  router.get("/", (req, res) => {
    res.set("Cache-Control", "no-store");
    const imagesPath = path_1.default.resolve(__dirname, "../../myPictures");
    fs_1.default.readdir(imagesPath, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error with loading gallery");
      } else {
        res.status(200).json(data);
      }
    });
  });
}
exports.default = imagesFunc;
