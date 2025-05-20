"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadFunc_1 = require("./uploadFunc");
const uploadPage = express_1.default.Router();
(0, uploadFunc_1.uploadFunc)(uploadPage);
exports.default = uploadPage;
