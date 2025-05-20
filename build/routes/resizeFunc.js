"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
function resizeFunc(router) {
    router.post("/", (0, multer_1.default)().none(), async (req, res) => {
        try {
            if (!req.body.resize) {
                console.log(req.body);
                console.log(req.body.resize);
                res.status(400).send("No File Uploaded");
                return;
            }
            else if (!req.body.width) {
                console.log(req.body);
                console.log(req.body.width);
                res.status(400).send("No width determined");
                return;
            }
            else if (!req.body.height) {
                console.log(req.body);
                console.log(req.body.height);
                res.status(400).send("No height determined");
                return;
            }
            let file = req.body.resize;
            const width = req.body.width;
            const height = req.body.height;
            file = path_1.default.basename(file);
            file = file.replaceAll("%20", " ");
            console.log(file);
            const oldFilePath = path_1.default.join(__dirname, "../../myPictures", file);
            if (path_1.default.basename(file, ".jpg").includes("resized")) {
                const start = path_1.default.basename(file, ".jpg").indexOf("resized");
                file = file.slice(0, start);
            }
            let newFilename = path_1.default.join(path_1.default.basename(file, ".jpg") + ` resized - ${width}x${height}.jpg`);
            newFilename = newFilename.replaceAll("%20", " ");
            const newFilePath = path_1.default.join(__dirname, "../../myPictures", newFilename);
            const imageBuffer = await promises_1.default.readFile(oldFilePath);
            await (0, sharp_1.default)(imageBuffer)
                .resize(JSON.parse(width), JSON.parse(height))
                .toFile(newFilePath);
            setTimeout(() => {
                promises_1.default.rm(oldFilePath);
            }, 1000);
            res
                .status(200)
                .send(`Image resized successfully! \nAccess the file from here: <a href="/myPictures/${newFilename}" class="">Image API URL</a>`);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Something went wrong!");
        }
    });
}
exports.default = resizeFunc;
