"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Submarino_1 = require("./submarino/Submarino");
const submarino = new Submarino_1.Submarino();
// submarino.init({
//     size: 5,
//     trail: 3
// });
submarino.init({
    size: 10,
    trail: 0
});
console.log("Submarino initialized.");
