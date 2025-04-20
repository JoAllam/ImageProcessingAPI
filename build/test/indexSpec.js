"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe("check if sum function works", function () {
    it("return 5", function () {
        expect((0, index_1.default)(2, 3)).toEqual(5);
    });
    it("return 13", function () {
        expect((0, index_1.default)(10, 3)).toEqual(13);
    });
    it("if anything but a number is entered, return an alert", function () {
        expect(() => (0, index_1.default)(2, "3")).toThrowError("Invalid input!");
    });
});
