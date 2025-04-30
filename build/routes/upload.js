"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ dest: 'myPictures/' });
let uploadPage = express_1.default.Router();
uploadPage.post('/', upload.single('anime'), (req, res, next) => {
    let file = req.file;
    console.log(file);
    res.send("File Uploaded Successfully!");
});
exports.default = uploadPage;
