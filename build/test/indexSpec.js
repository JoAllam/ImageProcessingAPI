"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
describe("suite for main endpoint", function () {
  it("Check if the server is working", async () => {
    const data = await (0, supertest_1.default)(index_1.default).get("/");
    expect(data.status).toBe(200);
  });
});
