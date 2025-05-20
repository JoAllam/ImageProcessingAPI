"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function uploadFunc(router) {
    const imagesDir = fs_1.default.readdirSync(path_1.default.resolve(__dirname, "../../myPictures"));
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
            }
            else {
                cb(null, true);
            }
        }
        else {
            cb(new Error("Only JPG files are allowed"));
        }
    };
    const upload = (0, multer_1.default)({ storage: storage, fileFilter: filter });
    router.post("/", upload.single("anime"), async (req, res, next) => {
        try {
            const file = req.file;
            if (!file) {
                res.status(400).send("No file was uploaded!");
                throw new Error("No file was uploaded!");
            }
            console.log(file);
            res
                .status(200)
                .send(`File Uploaded Successfully! \nAccess the file from here: <a href="${file.path}" class="">Image API URL</a>`);
            next();
        }
        catch (err) {
            console.error(err);
        }
    });
    router.use((err, req, res, next) => {
        if (err.message === "Only JPG files are allowed") {
            next();
            res.status(400).send("Only JPG files are allowed!");
        }
        else if (err.message === "File already exists") {
            next();
            res.status(400).send("File already exists");
        }
        else {
            next();
            res.status(500).send("Something went wrong!");
        }
    });
}
exports.default = uploadFunc;
