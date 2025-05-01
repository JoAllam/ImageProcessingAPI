"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
let uploadPage = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'myPictures/');
    },
    filename: (req, file, cb) => {
        let name = path_1.default.basename(file.originalname);
        cb(null, `${name}.jpg`);
    }
});
const filter = (req, file, cb) => {
    if (file.Mime === 'image/jpg') {
        cb(null, true);
    }
    else {
        cb(new Error("Only JPG files are allowed"), false);
    }
};
const upload = (0, multer_1.default)({ storage: storage, fileFilter: filter });
uploadPage.post('/', upload.single('anime'), (req, res, next) => {
    try {
        let file = req.file;
        console.log(file);
        res.send("File Uploaded Successfully!");
        next();
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});
exports.default = uploadPage;
