import { resizing } from "../../resizeFunc";
import path from "path";

describe("suite for resize function and images processing", function () {
  it("Check if function resizes image correctly and returns name of image correctly", async () => {
    let response = await resizing("Fushiguro.jpg", "300", "300");
    expect(response.name).toBe("Fushiguro resized - 300x300.jpg");
  });
  it("Check if function resizes image correctly and returns path of image correctly", async () => {
    let response = await resizing("Fushiguro.jpg", "300", "300");
    expect(response.path).toBe(
      path.resolve(__dirname, "../../../myPictures", response.name),
    );
  });
});
