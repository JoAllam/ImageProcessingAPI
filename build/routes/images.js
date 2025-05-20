"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imagesFunc_1 = require("./imagesFunc");
const images = express_1.default.Router();
(0, imagesFunc_1.imagesFunc)(images);
exports.default = images;
