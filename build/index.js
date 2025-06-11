"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("./routes/resize"));
const upload_1 = __importDefault(require("./routes/upload"));
const images_1 = __importDefault(require("./routes/images"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res
    .status(200)
    .sendFile(path_1.default.join(__dirname, "../index.html"), (err) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send("Something Went wrong while loading the homepage!");
      } else {
        console.log("HTML File sent successfully!");
      }
    });
});
app.use("/upload", upload_1.default);
app.use("/resize", resize_1.default);
app.use("/images", images_1.default);
app.use(
  "/myPictures",
  express_1.default.static(path_1.default.join(__dirname, "../myPictures")),
);
app.use(
  "/build",
  express_1.default.static(path_1.default.join(__dirname, "../build")),
);
app.use(express_1.default.static(path_1.default.join(__dirname, "../")));
app.listen(port, () => {
  console.log(`Server is up on localhost port ${port}`);
});
exports.default = app;
