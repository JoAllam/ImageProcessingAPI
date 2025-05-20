import app from "../../index";
import request from "supertest";

describe("suite for images endpoint", function () {
  it("Check if the endpoint is working", async () => {
    const data = await request(app).get("/images");
    expect(data.status).toBe(200);
  });
  it("Check if the endpoint returns json", async () => {
    const data = await request(app).get("/images");
    let body = data.body;
    expect(typeof body).toBe("object");
  });
});
