"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const matrix_1 = __importDefault(require("./matrix"));
const vector_1 = __importDefault(require("./vector"));
const v1 = new vector_1.default();
const v2 = new vector_1.default([1, 2, 3]);
// const v3 = new Vec([1, "2", 3]); // Good error!
const v4 = vector_1.default.empty(10, 1);
const v5 = v2.copy();
const v6 = new vector_1.default([3, 4, 5]);
console.log('Vectors');
console.log(v1.toString());
console.log(v2.toString());
console.log(v4.toString());
console.log(v5.toString());
console.log('Add vector', v2.add(10).toString());
console.log('Sub vector', v2.sub(10).toString());
console.log('Div vector', v2.div(new bignumber_js_1.default(10)).toString());
console.log('Mul vector', v2.mul(10).toString());
console.log('Add vector', v2.add(v2).toString());
console.log('Sub vector', v2.sub(v2).toString());
console.log('Div vector', v2.div(v2).toString());
console.log('Mul vector', v2.mul(v2).toString());
console.log(v5.sum().toString());
console.log('Matrix');
new matrix_1.default();
// const m1 = new Matrix([1, 2, 3]);
const m2 = new matrix_1.default([v2, v2]);
const m3 = m2.transpose();
const m4 = new matrix_1.default(v2);
const m5 = new matrix_1.default([[1, 2, 3], [2, 3, 4]]);
const m6 = new matrix_1.default([[1], [2]]);
const m7 = new matrix_1.default([[1, 0, 1], [0, 1, 2], [2, 0, 1]]);
const m8 = new matrix_1.default([[1, 0, 1], [0, 1, 1], [1, 0, 1]]);
const m9 = new matrix_1.default(v6).transpose();
console.log(m2.toString());
console.log(m3.toString());
console.log(m4.transpose().toString());
console.log(m5.toString());
console.log(m6.toString());
console.log(m5.add(m6).toString());
console.log(m5.add(1).toString());
console.log(m5.add(v2).toString());
console.log(m5.mul(v2).toString());
console.log(m5.sub("51").toString());
console.log(m7.dot(m8).toString());
console.log(m7.dot(m9).transpose().toString());
const a1 = new bignumber_js_1.default(51);
console.log(a1.div(new bignumber_js_1.default(10)).toNumber());
