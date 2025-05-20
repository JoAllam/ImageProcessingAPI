"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeFunc_1 = __importDefault(require("./resizeFunc"));
const resize = express_1.default.Router();
(0, resizeFunc_1.default)(resize);
exports.default = resize;
