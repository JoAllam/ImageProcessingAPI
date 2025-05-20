"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const supertest_1 = __importDefault(require("supertest"));
describe("suite for upload endpoint", function () {
    it("Check if the endpoint handles unexpected error and returns right status code", async () => {
        const data = await (0, supertest_1.default)(index_1.default).post("/upload");
        expect(data.status).toBe(400);
    });
    it("Check if the endpoint is handles unexpected error", async () => {
        const data = await (0, supertest_1.default)(index_1.default).post("/upload");
        expect(data.text).toBe("No file was uploaded!");
    });
});
