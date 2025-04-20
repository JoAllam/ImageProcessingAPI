"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid input!");
    }
    return a + b;
}
exports.default = sum;
console.log(sum(3, 4));
