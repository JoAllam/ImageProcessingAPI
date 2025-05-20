"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const supertest_1 = __importDefault(require("supertest"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let imagesPath = path_1.default.resolve(__dirname, "../../../myPictures");
let images = fs_1.default.readdirSync(imagesPath);
describe("suite for resize endpoint", function () {
  it("Check if the endpoint handles unexpected error and returns right status code", async () => {
    const data = await (0, supertest_1.default)(index_1.default).post(
      "/resize",
    );
    expect(data.status).toBe(500);
  });
  it("Check if the endpoint is handles unexpected error", async () => {
    const data = await (0, supertest_1.default)(index_1.default).post(
      "/resize",
    );
    expect(data.text).toBe("Something went wrong!");
  });
  it("Check if the endpoint is working well", async () => {
    const data = await (0, supertest_1.default)(index_1.default)
      .post("/resize")
      .type("form")
      .send({
        resize: images[0],
        width: "300",
        height: "400",
      });
    expect(data.status).toBe(200);
  });
});
