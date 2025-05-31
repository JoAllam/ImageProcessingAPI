"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const imagesDir = fs_1.default.readdirSync(
  path_1.default.resolve(__dirname, "../myPictures"),
);
console.log(imagesDir);
const storage = multer_1.default.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "myPictures/");
  },
  filename: (req, file, cb) => {
    const name = path_1.default.basename(file.originalname, ".jpg");
    cb(null, `${name}.jpg`);
  },
});
const filter = (req, file, cb) => {
  if (path_1.default.extname(file.originalname) === ".jpg") {
    if (imagesDir.includes(file.originalname)) {
      cb(new Error("File already exists"));
    } else {
      cb(null, true);
    }
  } else {
    cb(new Error("Only JPG files are allowed"));
  }
};
const upload = (0, multer_1.default)({ storage: storage, fileFilter: filter });
exports.default = upload;
