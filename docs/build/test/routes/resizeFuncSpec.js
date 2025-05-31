"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const resizeFunc_1 = require("../../resizeFunc");
const path_1 = __importDefault(require("path"));
describe("suite for resize function and images processing", function () {
  it("Check if function resizes image correctly and returns name of image correctly", async () => {
    let response = await (0, resizeFunc_1.resizing)(
      "Fushiguro.jpg",
      "300",
      "300",
    );
    expect(response.name).toBe("Fushiguro resized - 300x300.jpg");
  });
  it("Check if function resizes image correctly and returns path of image correctly", async () => {
    let response = await (0, resizeFunc_1.resizing)(
      "Fushiguro.jpg",
      "300",
      "300",
    );
    expect(response.path).toBe(
      path_1.default.resolve(__dirname, "../../../myPictures", response.name),
    );
  });
});
