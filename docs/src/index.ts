import express from "express";
import resize from "./routes/resize";
import upload from "./routes/upload";
import images from "./routes/images";
import path from "path";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../front/index.html"), (err) => {
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

app.use("/upload", upload);
app.use("/resize", resize);
app.use("/images", images);
app.use("/myPictures", express.static(path.join(__dirname, "../myPictures")));
app.use("/build", express.static(path.join(__dirname, "../build")));
app.use(express.static(path.join(__dirname, "../front/")));

app.listen(port, () => {
  console.log(`Server is up on localhost port ${port}`);
});

export default app;
