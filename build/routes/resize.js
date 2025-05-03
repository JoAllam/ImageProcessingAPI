"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
let resize = express_1.default.Router();
let upload = (0, multer_1.default)({});
resize.post('/', upload.single('resize'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            console.log(req.body);
            console.log(req.file);
            res.status(400).send("No File Uploaded");
            return;
        }
        const file = req.file;
        const width = req.body.width;
        const height = req.body.height;
        let oldFilePath = path_1.default.join(__dirname, '../../myPictures', file.originalname);
        if (path_1.default.basename(file.originalname, '.jpg').indexOf('resized')) {
            let start = path_1.default.basename(file.originalname, '.jpg').indexOf('resized');
            file.originalname = file.originalname.slice(0, start);
        }
        let newFilePath = path_1.default.join(__dirname, '../../myPictures', path_1.default.basename(file.originalname, '.jpg') + ` resized - ${width}x${height}.jpg`);
        yield (0, sharp_1.default)(file.buffer)
            .resize(JSON.parse(width), JSON.parse(height))
            .toFile(newFilePath);
        setTimeout(() => {
            promises_1.default.rm(oldFilePath);
        }, 1000);
        res.send("Image resized successfully");
    }
    catch (err) {
        console.error(err);
        res.send("Something went wrong!");
    }
}));
exports.default = resize;
