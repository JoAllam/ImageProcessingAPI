"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const supertest_1 = __importDefault(require("supertest"));
describe("suite for images endpoint", function () {
    it("Check if the endpoint is working", async () => {
        const data = await (0, supertest_1.default)(index_1.default).get("/images");
        expect(data.status).toBe(200);
    });
    it("Check if the endpoint returns json", async () => {
        const data = await (0, supertest_1.default)(index_1.default).get("/images");
        let body = data.body;
        expect(typeof body).toBe("object");
    });
});
