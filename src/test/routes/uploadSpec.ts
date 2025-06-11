import app from "../../index";
import request from "supertest";

describe("suite for upload endpoint", function () {
  it("Check if the endpoint handles unexpected error and returns right status code", async () => {
    const data = await request(app).post("/upload");
    expect(data.status).toBe(400);
  });
  it("Check if the endpoint is handles unexpected error", async () => {
    const data = await request(app).post("/upload");
    expect(data.text).toBe("No file was uploaded!");
  });
});
