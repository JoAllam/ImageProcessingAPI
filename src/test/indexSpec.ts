import app from "../index";
import request from "supertest";

describe("suite for main endpoint", function () {
  it("Check if the server is working", async () => {
    const data = await request(app).get("/");
    expect(data.status).toBe(200);
  });
});
