import app from "../../index";
import request from "supertest";
import fs from "fs";
import path from "path";

let imagesPath = path.resolve(__dirname, "../../../myPictures");
let images = fs.readdirSync(imagesPath);

describe("suite for resize endpoint", function () {
  it("Check if the endpoint handles unexpected error and returns right status code", async () => {
    const data = await request(app).post("/resize");
    expect(data.status).toBe(500);
  });
  it("Check if the endpoint is handles unexpected error", async () => {
    const data = await request(app).post("/resize");
    expect(data.text).toBe("Something went wrong!");
  });
  it("Check if the endpoint is working well", async () => {
    const data = await request(app).post("/resize").type("form").send({
      resize: images[0],
      width: "300",
      height: "400",
    });
    expect(data.status).toBe(200);
  });
});
