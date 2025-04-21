"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("./routes/resize"));
const upload_1 = __importDefault(require("./routes/upload"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    try {
        res.status(200).send("App is working!");
    }
    catch (err) {
        res.status(500).send("Server Error");
    }
});
app.use('/upload', upload_1.default);
app.use('/resize', resize_1.default);
app.listen(port, () => {
    console.log(`Server is up on localhost port ${port}`);
});
exports.default = app;
