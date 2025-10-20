import { Submarino } from "./submarino/Submarino";
import { ConfigSubmarino } from "./config/ConfigSubmarino";

const submarino : Submarino = new Submarino();
const size : ConfigSubmarino = new ConfigSubmarino();

submarino.init(size);

console.log("Submarino initialized.");