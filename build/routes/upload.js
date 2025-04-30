"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
let uploadPage = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'myPictures/');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}.jpg`);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
uploadPage.post('/', upload.single('anime'), (req, res, next) => {
    let file = req.file;
    console.log(file);
    res.send("File Uploaded Successfully!");
    next();
});
exports.default = uploadPage;
